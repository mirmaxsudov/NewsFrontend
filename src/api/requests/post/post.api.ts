import PostRequest, {
    SendPostPageResponseAll,
    SendPostPageResponseOwn,
    SendPostResponse,
} from "../../../types/post/PostTypes.ts";
import $api from "../../request.ts";
import ApiResponse from "../../../types/ApiResponse.ts";
import {SearchEnum} from "../../../enums/CategoryItemTitle.ts";

const BASE_POST_URL = "/api/v1/send-post";

const createNewSendPost = async (request: PostRequest) => {
    await $api.post(`${BASE_POST_URL}`, request);
};

const fetchSendPostsByPage = async (
    page: number,
    size: number,
): Promise<ApiResponse<SendPostPageResponseOwn>> => {
    const response = await $api.get<ApiResponse<SendPostPageResponseOwn>>(
        BASE_POST_URL,
        {
            params: {
                page,
                size,
            },
        },
    );

    return response.data;
};

const fetchById = async (
    sendPostId: string,
): Promise<ApiResponse<SendPostResponse>> => {
    const response = await $api.get<ApiResponse<SendPostResponse>>(
        `${BASE_POST_URL}/${sendPostId}`,
    );
    return response.data;
};

const viewed = async (sendPostId: string) => {
    await $api.patch(`${BASE_POST_URL}/viewed/${sendPostId}`);
};

const relatedPosts = async (
    sendPostId: string | number,
    page: number,
    size: number,
): Promise<ApiResponse<SendPostPageResponseAll>> => {
    const response = await $api.get<ApiResponse<SendPostPageResponseAll>>(
        `${BASE_POST_URL}/related/${sendPostId}`,
        {
            params: {
                page,
                size,
            },
        },
    );
    return response.data;
};

const topSendPosts = async (
    page: number,
    size: number,
): Promise<ApiResponse<SendPostPageResponseAll>> => {
    const response = await $api.get<ApiResponse<SendPostPageResponseAll>>(
        `${BASE_POST_URL}/top`,
        {
            params: {
                page,
                size,
            },
        },
    );
    return response.data;
};


const postsByCategory = async (
    category: string,
    page: number,
    size: number,
    search: SearchEnum = SearchEnum.NEW
): Promise<ApiResponse<SendPostPageResponseAll>> => {
    const res = await $api.get<ApiResponse<SendPostPageResponseAll>>(
        `${BASE_POST_URL}/${category}/category`,
        {
            params: {
                page,
                size,
                category,
                isNew: search === SearchEnum.NEW,
                isTrendy: search === SearchEnum.TRENDY,
                isPopular: search === SearchEnum.POPULAR,
                isTop: search === SearchEnum.TOP
            }
        }
    )

    return res.data;
}

export {
    createNewSendPost,
    fetchSendPostsByPage,
    fetchById,
    viewed,
    relatedPosts,
    topSendPosts,
    postsByCategory
};