import ApiResponse from "../../../types/ApiResponse.ts";
import {AuthLoginResponseType} from "../../../types/auth/Auth.ts";
import $api from "../../request.ts";

const BASE_AUTH_URL: string = "/api/v1/auth";

const authenticate = async (code: string, password: string): Promise<ApiResponse<null> | null> => {
    const response = await $api.post<ApiResponse<null>>(`${BASE_AUTH_URL}/authenticate`, undefined, {
        params: {code, password}
    });
    return response.data;
}

const login = async (username: string, password: string): Promise<ApiResponse<AuthLoginResponseType> | null> => {
    const response = await $api.post<ApiResponse<AuthLoginResponseType>>(`${BASE_AUTH_URL}/login`, undefined, {
        params: {username, password}
    });
    return response.data;
}

export {authenticate, login};