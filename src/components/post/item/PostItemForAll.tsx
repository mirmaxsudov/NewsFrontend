import PostItemOwner from "./PostItemOwner.tsx";
import { useNavigate } from "react-router-dom";
import { SendPostPreviewForAll } from "../../../types/post/PostTypes.ts";
import DOMPurify from "dompurify";
import removeImgTags from "../../../helpers/DeleteImageTag.ts";

const PostItemForAll = ({ post }: { post: SendPostPreviewForAll }) => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`/post/${post.id}`);
  };

  const sanitizedHtml = DOMPurify.sanitize(removeImgTags(post.body));

  return (
    <>
      <div
        onClick={handleClick}
        className={
          "post__item-cart rounded-[12px] shadow-gray-400 cursor-pointer"
        }
      >
        <div className={"post__item-image h-[190px] p-[10px]"}>
          <img
            className={"w-full h-full object-cover rounded-[6px]"}
            src={post.image.url}
            alt={post.title}
          />
        </div>
        <div className={"post__item-body p-[10px] h-[100px]"}>
          <h2
            className={
              "line-clamp-1 text-[#3E3232] text-[16px] font-medium capitalize"
            }
          >
            {post.title}
          </h2>
          <p
            className={
              "line-clamp-2 text-[#3E3232BF] text-[14px] font-normal my-[20px]"
            }
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
          ></p>
        </div>
        <div className={"p-[10px]"}>
          <PostItemOwner user={post.owner} />
        </div>
      </div>
    </>
  );
};

export default PostItemForAll;
