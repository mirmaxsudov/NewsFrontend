import axios from "axios";
import BASE_URL from "../constants/url.ts";

const $api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
})

// ToDo: Add Interceptors

$api.interceptors.request.use((config) => {
    return config
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})

$api.interceptors.response.use((config) => {
    return config
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})

// ToDo: Add Validation

// ToDo: Add Error Handling

export default $api;