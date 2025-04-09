import PostRequest, {SendPostPageResponseOwn} from "../../../types/post/PostTypes.ts";
import $api from "../../request.ts";
import ApiResponse from "../../../types/ApiResponse.ts";

const BASE_POST_URL = "/api/v1/send-post";

const createNewSendPost = async (request: PostRequest) => {
    await $api.post(`${BASE_POST_URL}`, request);
}

const fetchSendPostsByPage = async (page: number, size: number): Promise<ApiResponse<SendPostPageResponseOwn>> => {
    const response = await $api.get<ApiResponse<SendPostPageResponseOwn>>(
        BASE_POST_URL, {
            params: {
                page, size
            }
        }
    );

    return response.data;
}

export {createNewSendPost, fetchSendPostsByPage};