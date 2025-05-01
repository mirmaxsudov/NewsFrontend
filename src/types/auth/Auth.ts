import ImageAttachmentType from "../attachment/AttachmentTypes.ts";

export type AuthLoginResponseType = {
    token: string;
    type: string;
    user: AuthUserPreviewType;
}

type AuthUserPreviewType = {
    id: number;
    firstname: string;
    username: string;
    image: ImageAttachmentType;
}

export type {AuthUserPreviewType};