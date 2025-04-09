import ImageAttachmentType from "../attachment/AttachmentTypes.ts";

interface UserPreviewType {
    id: number;
    firstname: string;
    joinedAt: string;
    profileImage: ImageAttachmentType;
}

export default UserPreviewType;