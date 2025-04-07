import PostRequest from "../../../types/post/PostTypes.ts";
import $api from "../../request.ts";

const BASE_POST_URL = "/api/v1/send-post";

const createNewSendPost = async (request: PostRequest) => {
    await $api.post(`${BASE_POST_URL}`, request);
}

export {createNewSendPost}