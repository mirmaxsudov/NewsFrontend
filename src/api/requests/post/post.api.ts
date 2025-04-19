import PostRequest, {
    SendPostPageResponseOwn,
    SendPostResponse
} from "../../../types/post/PostTypes.ts";
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

const fetchById = async (sendPostId: string): Promise<ApiResponse<SendPostResponse>> => {
    const response = await $api.get<ApiResponse<SendPostResponse>>(`${BASE_POST_URL}/${sendPostId}`);
    return response.data;
}

const viewed = async (sendPostId: string) => {
    await $api.patch(`${BASE_POST_URL}/viewed/${sendPostId}`);
}

export {createNewSendPost, fetchSendPostsByPage, fetchById, viewed};