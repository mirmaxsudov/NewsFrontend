import React from "react";
import DOMPurify from "dompurify";
import PostItemOwner from "./PostItemOwner.tsx";
import {useNavigate} from "react-router-dom";
import {PostItemProps} from "../../../types/post/PostTypes.ts";
import removeImgTags from "../../../helpers/DeleteImageTag.ts";
import "./PostItem.css";

const PostItem = ({postPreview}: PostItemProps) => {
    const navigate = useNavigate();
    const {post, owner} = postPreview;
    const sanitizedHtml = DOMPurify.sanitize(removeImgTags(post.body));

    const handleClick = (e: React.MouseEvent): void => {
        e.preventDefault();
        navigate(`/post/${post.id}`);
    }

    return (
        <>
            <div onClick={handleClick} className={"post__item-cart rounded-[12px] shadow-gray-400 cursor-pointer"}>
                <div className={"post__item-image h-[190px] p-[10px]"}>
                    <img
                        className={"w-full h-full object-cover rounded-[6px]"}
                        src={"http://localhost:8080/api/v1/attachment/" + post.image.id} alt={post.title}/>
                </div>
                <div className={"post__item-body p-[10px] h-[100px]"}>
                    <h2 className={"line-clamp-1 text-[#3E3232] text-[16px] font-medium capitalize"}>{post.title}</h2>
                    <p className={"line-clamp-2 text-[#3E3232BF] text-[14px] font-normal my-[20px]"}
                       dangerouslySetInnerHTML={{__html: sanitizedHtml}}>
                    </p>
                </div>
                <div className={"p-[10px]"}>
                    <PostItemOwner user={owner}/>
                </div>
            </div>
        </>
    )
}

export default PostItem;