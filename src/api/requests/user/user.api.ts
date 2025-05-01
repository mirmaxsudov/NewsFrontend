import $api from "../../request.ts";
import { UserUpdateType } from "../../../components/profile/profileEdit/ProfileEdit.tsx";
import ApiResponse from "../../../types/ApiResponse.ts";

const BASE_USER_URL: string = "/api/v1/user";

const fetchUserDetails = async (userId: number | string): Promise<any> => {
  return await $api.get(`${BASE_USER_URL}/` + userId);
};

const updateUser = async (
  data: Partial<UserUpdateType> | UserUpdateType,
): Promise<ApiResponse<void>> => {
  return await $api.put(`${BASE_USER_URL}/update`, data);
};

const updateExplanation = async (
  explanation: string,
): Promise<ApiResponse<void>> => {
  return await $api.patch(`${BASE_USER_URL}/update-explanation`, null, {
    params: { explanation },
  });
};

const updateProfileImage = async (
  imageId: number,
): Promise<ApiResponse<void>> => {
  return await $api.patch(`${BASE_USER_URL}/update-profile-image/` + imageId);
};

const updateBanner = async (imageId: number): Promise<ApiResponse<void>> => {
  return await $api.patch(`${BASE_USER_URL}/update-banner/` + imageId);
};

const deleteBanner = async (): Promise<ApiResponse<void>> => {
  return await $api.delete(`${BASE_USER_URL}/delete-banner`);
};

const deleteProfileImage = async (): Promise<ApiResponse<void>> => {
  return await $api.delete(`${BASE_USER_URL}/delete-profile-image`);
};

export {
  fetchUserDetails,
  updateUser,
  updateExplanation,
  updateProfileImage,
  updateBanner,
  deleteBanner,
  deleteProfileImage,
};
