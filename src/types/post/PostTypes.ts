import ImageAttachmentType from "../attachment/AttachmentTypes.ts";
import UserPreviewType from "../user/UserType.ts";

interface PostRequest {
    title: string,
    postBody: string,
    tags: string,
    imageId: number;
}

export interface SendPostPreview {
    id: number;
    title: string;
    body: string;
    image: ImageAttachmentType;
}

export interface SendPostPageResponseOwn {
    page: number;
    size: number;
    last: boolean;
    totalElements: number;
    totalPages: number;
    content: SendPostPreview[];
    owner: UserPreviewType;
}

export interface PostItemProps {
    postPreview: {
        post: SendPostPreview;
        owner: UserPreviewType;
    }
}

export default PostRequest;