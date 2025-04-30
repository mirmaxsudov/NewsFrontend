import $api from "../../request.ts";
import {UserUpdateType} from "../../../components/profile/profileEdit/ProfileEdit.tsx";
import ApiResponse from "../../../types/ApiResponse.ts";

const BASE_USER_URL: string = "/api/v1/user";

const fetchUserDetails = async (userId: number | string): Promise<any> => {
    return await $api.get(`${BASE_USER_URL}/` + userId)
}

const updateUser = async (data: Partial<UserUpdateType> | UserUpdateType): Promise<ApiResponse<void>> => {
    return await $api.put(`${BASE_USER_URL}/update`, data);
}

export {fetchUserDetails, updateUser};