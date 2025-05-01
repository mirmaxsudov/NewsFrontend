import $api from "../../request.ts";
import ApiResponse from "../../../types/ApiResponse.ts";
import { ContactRequestType } from "../../../types/contact/ContactType.ts";

const BASE_CONTACT_API_URL = "/api/v1/contact";

const sendContact = async (
  request: ContactRequestType,
): Promise<ApiResponse<void>> => {
  const response = await $api.post<ApiResponse<void>>(
    `${BASE_CONTACT_API_URL}`,
    request,
  );
  return response.data;
};

export { sendContact };
