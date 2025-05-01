import { useEffect, useState } from "react";
import { SendPostPageResponseAll } from "../../../../types/post/PostTypes.ts";
import { relatedPosts } from "../../../../api/requests/post/post.api.ts";
import { toast } from "react-toastify";
import RelatedPostsLoading from "./RelatedPostsLoading.tsx";
import PostItemForAll from "../../item/PostItemForAll.tsx";

const RelatedPosts = ({ sendPostId }: { sendPostId: string | number }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<SendPostPageResponseAll>(
    {} as SendPostPageResponseAll,
  );

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const apiResponse = await relatedPosts(sendPostId, 0, 4);
        setResponse(apiResponse.data);
      } catch (e) {
        console.log(e);
        toast("Something went wrong", { type: "error" });
      } finally {
        setLoading(false);
        window.scrollTo(0, 200);
      }
    };

    fetchRelatedPosts();
  }, [sendPostId]);

  if (loading) return <RelatedPostsLoading />;

  return (
    <div>
      <div className={"flex justify-between items-center"}>
        <h1
          className={
            "capitalize red-line text-[#3E3232] text-[20px] font-medium mb-[20px]"
          }
        >
          related posts
        </h1>
        <div className={"flex items-center gap-[20px]"}>
          <div
            className={
              "bg-[#F5F5F5] cursor-pointer size-[40px] flex items-center justify-center rounded-[12px]"
            }
          >
            <svg
              width="9"
              height="13"
              viewBox="0 0 9 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13C6.71875 13 6.46875 12.9062 6.28125 12.7188L1.28125 7.71875C0.875 7.34375 0.875 6.6875 1.28125 6.3125L6.28125 1.3125C6.65625 0.90625 7.3125 0.90625 7.6875 1.3125C8.09375 1.6875 8.09375 2.34375 7.6875 2.71875L3.40625 7L7.6875 11.3125C8.09375 11.6875 8.09375 12.3438 7.6875 12.7188C7.5 12.9062 7.25 13 7 13Z"
                fill="#3E3232"
                fill-opacity="0.5"
              />
            </svg>
          </div>
          <div
            className={
              "bg-[#F5F5F5] cursor-pointer size-[40px] flex items-center justify-center rounded-[12px]"
            }
          >
            <svg
              width="9"
              height="13"
              viewBox="0 0 9 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 13C1.71875 13 1.46875 12.9062 1.28125 12.7188C0.875 12.3438 0.875 11.6875 1.28125 11.3125L5.5625 7L1.28125 2.71875C0.875 2.34375 0.875 1.6875 1.28125 1.3125C1.65625 0.90625 2.3125 0.90625 2.6875 1.3125L7.6875 6.3125C8.09375 6.6875 8.09375 7.34375 7.6875 7.71875L2.6875 12.7188C2.5 12.9062 2.25 13 2 13Z"
                fill="#3E3232"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={"grid grid-cols-4"}>
        {response.content.map((item) => (
          <div key={item.id}>
            <PostItemForAll key={item.id} post={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
