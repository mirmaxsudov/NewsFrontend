import {useEffect, useState} from "react";
import NewsInput from "../../@core/components/input/NewsInput.tsx";
import {InputEnum} from "../../enums/inputEnum.ts";
import Editor from "../editor/Editor.tsx";
import FileUpload from "../../@core/components/input/FileUpload.tsx";
import {v4 as uuid} from "uuid";
import NewsButton from "../../@core/components/btns/NewsButton.tsx";
import {uploadFile} from "../../api/requests/file/file.api.ts";
import {GET_IMAGE_URL} from "../../constants/url.ts";
import PostRequest from "../../types/post/PostTypes.ts";
import {createNewSendPost} from "../../api/requests/post/post.api.ts";

const ProfileSendPost = () => {
    const [title, setTitle] = useState<string>("");
    const [tags, setTags] = useState<string>("");
    const [newTag, setNewTag] = useState<string>("");
    const [editorData, setEditorData] = useState<string>("");
    const [image, setImage] = useState<File[]>([]);
    const [uploadedImageId, setUploadedImageId] = useState<number>(-1);

    useEffect(() => {
        const handleImageUpload = async () => {
            if (image.length > 0) {
                const fileId = await uploadFile(image[0]);
                setUploadedImageId(fileId);
            }
        }

        handleImageUpload();
    }, [image]);

    const handleCreatePost = async () => {
        const request: PostRequest = {
            title,
            tags,
            postBody: editorData,
            imageId: uploadedImageId
        }

        await createNewSendPost(request)

        alert(
            "Post created successfully"
        )
    }

    return (
        <>
            <div className={"grid grid-cols-12 gap-[24px] w-full"}>
                <div className={"col-span-9 w-full"}>
                    <div className={"grid grid-cols-2 items-end gap-[24px]"}>
                        <NewsInput className={"w-[100%]"} label={"title"} type={InputEnum.TEXT} onChange={setTitle}/>
                        <div className={"inline-block"}>
                            <label className="flex flex-col gap-[15px]">
                                <span className="text-[#3E3232] text-[16px] inline-block capitalize font-medium">
                                    add tags
                                </span>
                                <input
                                    value={newTag}
                                    onChange={(e) => setNewTag(e.target.value)}
                                    className={`text-[#3E3232] font-medium focus:outline-none focus:ring-1 focus:ring-[#3E3232] transition-all duration-300 bg-[#F5F5F5] py-[10px] px-[16px] rounded-[12px]`}
                                    type={InputEnum.TEXT}
                                />
                            </label>
                        </div>
                    </div>
                    <Editor className={"mt-[54px]"} value={editorData} onChange={setEditorData}/>
                </div>
                <div className={"col-span-3"}>
                    {
                        uploadedImageId !== -1 ? <div className={" mb-[20px]"}>
                            <img className={"rounded-[12px]"} src={GET_IMAGE_URL + uploadedImageId} alt={"Image"}/>
                            <button
                                className={"hover:bg-[#ddd] hover:shadow outline-[#3E3232] outline-1 none inline-block bg-[#F5F5F5] text-[#3E3232] p-2 rounded-[12px] mt-[12px]"}
                                onClick={() => setUploadedImageId(-1)}
                                type={"button"}>
                                ❌
                            </button>
                        </div> : <>
                            <FileUpload key={uuid()} onFileChange={setImage}/>
                        </>
                    }
                    <div className={"flex justify-between items-center"}>
                        <NewsButton className={"bg-[#F5F5F5] capitalize text-[#3E3232BF]"}>
                            <>

                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 7.75C7.01562 7.75 6.25 8.54297 6.25 9.5C6.25 10.4844 7.01562 11.25 8 11.25C8.95703 11.25 9.75 10.4844 9.75 9.5C9.75 8.54297 8.95703 7.75 8 7.75ZM13.7148 4.30469L11.418 2.00781C11.1992 1.78906 10.8438 1.625 10.5156 1.625H3.625C2.64062 1.625 1.875 2.41797 1.875 3.375V12.125C1.875 13.1094 2.64062 13.875 3.625 13.875H12.375C13.332 13.875 14.125 13.1094 14.125 12.125V5.23438C14.125 4.90625 13.9609 4.55078 13.7148 4.30469ZM5.375 2.9375H9.3125V5.125H5.375V2.9375ZM12.8125 12.125C12.8125 12.3711 12.5938 12.5625 12.375 12.5625H3.625C3.37891 12.5625 3.1875 12.3711 3.1875 12.125V3.375C3.1875 3.15625 3.37891 2.9375 3.625 2.9375H4.0625V5.78125C4.0625 6.16406 4.33594 6.4375 4.71875 6.4375H9.96875C10.3242 6.4375 10.625 6.16406 10.625 5.78125V3.04688L12.7578 5.20703C12.7852 5.23438 12.8125 5.26172 12.8125 5.31641V12.125Z"
                                        fill="#3E3232" fill-opacity="0.5"/>
                                </svg>
                                draft
                            </>
                        </NewsButton>
                        <NewsButton className={"bg-[#F5F5F5] capitalize text-[#3E3232BF]"}>
                            <>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.5 7.75C4.5 5.83594 6.05859 4.25 8 4.25C9.91406 4.25 11.5 5.83594 11.5 7.75C11.5 9.69141 9.91406 11.25 8 11.25C6.05859 11.25 4.5 9.69141 4.5 7.75ZM8 9.9375C9.20312 9.9375 10.1875 8.98047 10.1875 7.75C10.1875 6.54688 9.20312 5.5625 8 5.5625C7.97266 5.5625 7.94531 5.5625 7.91797 5.5625C7.97266 5.72656 8 5.86328 8 6C8 6.98438 7.20703 7.75 6.25 7.75C6.08594 7.75 5.94922 7.75 5.8125 7.69531C5.8125 7.72266 5.8125 7.75 5.8125 7.75C5.8125 8.98047 6.76953 9.9375 8 9.9375ZM2.72266 3.83984C4.00781 2.63672 5.78516 1.625 8 1.625C10.1875 1.625 11.9648 2.63672 13.25 3.83984C14.5352 5.01562 15.3828 6.4375 15.793 7.42188C15.875 7.64062 15.875 7.88672 15.793 8.10547C15.3828 9.0625 14.5352 10.4844 13.25 11.6875C11.9648 12.8906 10.1875 13.875 8 13.875C5.78516 13.875 4.00781 12.8906 2.72266 11.6875C1.4375 10.4844 0.589844 9.0625 0.179688 8.10547C0.0976562 7.88672 0.0976562 7.64062 0.179688 7.42188C0.589844 6.4375 1.4375 5.01562 2.72266 3.83984ZM8 2.9375C6.19531 2.9375 4.74609 3.75781 3.625 4.79688C2.55859 5.78125 1.84766 6.92969 1.46484 7.75C1.84766 8.57031 2.55859 9.74609 3.625 10.7305C4.74609 11.7695 6.19531 12.5625 8 12.5625C9.77734 12.5625 11.2266 11.7695 12.3477 10.7305C13.4141 9.74609 14.125 8.57031 14.5078 7.75C14.125 6.92969 13.4141 5.78125 12.3477 4.79688C11.2266 3.75781 9.77734 2.9375 8 2.9375Z"
                                        fill="#3E3232" fill-opacity="0.5"/>
                                </svg>
                                Preview
                            </>
                        </NewsButton>
                        <NewsButton
                            onClick={handleCreatePost}
                            className={"bg-[#F81539BF] capitalize text-[#fff]"}>
                            <>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.6992 0.886719C14.5078 0.75 14.2344 0.722656 14.0156 0.859375L1.32812 8.07812C1.10938 8.1875 0.972656 8.43359 1 8.67969C1 8.92578 1.16406 9.14453 1.38281 9.25391L5.59375 11.0039V14.0938C5.59375 14.3398 5.70312 14.5586 5.92188 14.6953C6.03125 14.7227 6.14062 14.75 6.22266 14.75C6.33203 14.75 6.46875 14.7227 6.57812 14.668L9.61328 12.6992L12.293 13.8477C12.375 13.875 12.457 13.9023 12.5664 13.9023C12.6758 13.9023 12.7852 13.8477 12.8672 13.793C13.0586 13.7109 13.168 13.5195 13.1953 13.3281L14.9453 1.51562C15.0273 1.26953 14.918 1.02344 14.6992 0.886719ZM11.0898 4.03125L5.97656 9.74609L3.13281 8.54297L11.0898 4.03125ZM6.87891 12.8906V11.5508L8.13672 12.0977L6.87891 12.8906ZM12.0469 12.2891L7.23438 10.2656L13.3594 3.45703L12.0469 12.2891Z"
                                        fill="white"/>
                                </svg>
                                public
                            </>
                        </NewsButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSendPost;