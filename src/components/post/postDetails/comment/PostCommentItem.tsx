import {CommentType} from "./PostComments.tsx";
import PostCommentImage from "./PostCommentImage.tsx";
import classNames from "classnames";

type PostCommentItemPropsType = {
    comment: CommentType;
    isLast?: boolean;
    isParent?: boolean;
    isFirst?: boolean;
}

const PostCommentItem = ({comment, isLast = false, isParent = true, isFirst = false}: PostCommentItemPropsType) => {
    return (
        <>
            <div className={classNames("py-[25px] px-[20px] rounded-[12px] relative w-full", {
                "pb-[140px]": comment.children,
                "mb-[40px]": !isLast && isParent,
                "bg-[#F5F5F5]": isParent,
                "bg-[#fff]": !isParent,
                "-top-[140px]": (!isFirst && isParent)
            })}>
                <div className={"flex items-center justify-between"}>
                    <div className={"flex items-center gap-[10px]"}>
                        <PostCommentImage firstname={comment.firstname} image={comment.img}/>
                        <div>
                            <p className={"text-[#3E3232] font-medium text-[16px]"}>{comment.firstname}</p>
                            <p className={"flex gap-[10px] items-center text-[#3E3232BF]"}>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.03125 2.5H8.96875V1.40625C8.96875 1.05078 9.24219 0.75 9.625 0.75C9.98047 0.75 10.2812 1.05078 10.2812 1.40625V2.5H11.375C12.332 2.5 13.125 3.29297 13.125 4.25V13C13.125 13.9844 12.332 14.75 11.375 14.75H2.625C1.64062 14.75 0.875 13.9844 0.875 13V4.25C0.875 3.29297 1.64062 2.5 2.625 2.5H3.71875V1.40625C3.71875 1.05078 3.99219 0.75 4.375 0.75C4.73047 0.75 5.03125 1.05078 5.03125 1.40625V2.5ZM2.1875 13C2.1875 13.2461 2.37891 13.4375 2.625 13.4375H11.375C11.5938 13.4375 11.8125 13.2461 11.8125 13V6H2.1875V13Z"
                                        fill="#3E3232" fill-opacity="0.5"/>
                                </svg>
                                {comment.commentAt}</p>
                        </div>
                    </div>
                    {
                        isParent && (
                            <div>
                                <button
                                    className={"hover:bg-[#3E32320F] hover:text-[#3E3232] transition-colors duration-200 ease-in-out flex items-center justify-center gap-[3px] bg-[#3E32320D] py-[12px] px-[17px] text-[#3E3232BF] font-medium text-[14px] rounded-[12px]"}>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.7539 5.95703L8.94141 10.0859C8.53125 10.4414 7.875 10.1406 7.875 9.59375V7.21484C3.60938 7.26953 1.80469 8.30859 3.03516 12.2734C3.17188 12.7109 2.625 13.0664 2.26953 12.793C1.06641 11.918 0 10.25 0 8.58203C0 4.42578 3.47266 3.52344 7.875 3.46875V1.30859C7.875 0.734375 8.53125 0.433594 8.94141 0.789062L13.7539 4.91797C14.0547 5.21875 14.0547 5.68359 13.7539 5.95703Z"
                                            fill="#3E3232" fill-opacity="0.5"/>
                                    </svg>
                                    Reply
                                </button>
                            </div>
                        )
                    }
                </div>
                <p className={"mt-[15px] text-[#000000BF] text-[14px] font-normal"}>
                    {comment.comment}
                </p>
            </div>
            {
                comment.children && (
                    <>
                        <div className={"relative -top-[140px] mb-[40px]"}>
                            <div className={"flex flex-col justify-center"}>
                                <div className={"w-[70%] mx-auto shadow-gray-200 shadow-[0px_4px_4px_0px] rounded-[12px]"}>
                                    {
                                        comment.children.map(child => (
                                            <PostCommentItem
                                                comment={child}
                                                isLast={(comment.children as CommentType[]).length === 1}
                                                isParent={false}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>

    )
}


export default PostCommentItem;