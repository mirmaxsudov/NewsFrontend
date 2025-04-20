import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import Cookies from "js-cookie";
import BASE_URL from "../constants/url.ts";

const $api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {"Content-Type": "application/json"},
    timeout: 10000,
});

// Flag to prevent infinite loops
let isRefreshing = false;
let pendingRequests: Array<(token: string) => void> = [];

// 1) Request interceptor: attach access token
$api.interceptors.request.use((config) => {
    const token = Cookies.get("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// 2) Response interceptor: handle 401 by refreshing token
$api.interceptors.response.use(
    (res: AxiosResponse) => res,
    async (error: AxiosError) => {
        const originalReq = error.config as AxiosRequestConfig & { _retry?: boolean };
        if (error.response?.status === 401 && !originalReq._retry) {
            // mark to prevent loop
            originalReq._retry = true;

            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    // Call your refresh endpoint (HttpOnly cookie sent automatically)
                    const {data} = await axios.post(
                        `${BASE_URL}/api/v1/auth/refresh`,
                        {},
                        {withCredentials: true}
                    );
                    const newToken = data.accessToken;
                    // store in JS cookie for subsequent requests
                    Cookies.set("token", newToken, {secure: true, sameSite: "lax"});

                    // retry all pending requests
                    pendingRequests.forEach((cb) => cb(newToken));
                    pendingRequests = [];
                } catch (refreshError) {
                    // refresh failed → force logout
                    window.location.href = "/auth/login";
                    return Promise.reject(refreshError);
                } finally {
                    isRefreshing = false;
                }
            }

            // queue the current request until the new token is ready
            return new Promise((resolve) => {
                pendingRequests.push((token: string) => {
                    if (!originalReq.headers) originalReq.headers = {};
                    originalReq.headers.Authorization = `Bearer ${token}`;
                    resolve(axios(originalReq));
                });
            });
        }

        // handle other statuses
        if (error.response?.status === 403) {
            window.location.href = "/forbidden";
        }
        return Promise.reject(error);
    }
);

export default $api;
