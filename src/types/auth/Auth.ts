import ImageAttachmentType from "../attachment/AttachmentTypes.ts";

type AuthLoginResponseType = {
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

export type {AuthLoginResponseType, AuthUserPreviewType};