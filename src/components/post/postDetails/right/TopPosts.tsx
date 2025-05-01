import { useEffect, useState } from "react";
import { SendPostPageResponseAll } from "../../../../types/post/PostTypes.ts";
import { toast } from "react-toastify";
import { topSendPosts } from "../../../../api/requests/post/post.api.ts";
import removeImgTags from "../../../../helpers/DeleteImageTag.ts";
import { Link } from "react-router-dom";

const TopPosts = () => {
  const [response, setResponse] = useState<SendPostPageResponseAll>(
    {} as SendPostPageResponseAll,
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTopPosts = async () => {
      try {
        const apiResponse = await topSendPosts(0, 10);
        setResponse(apiResponse.data);
      } catch (e) {
        console.log(e);
        toast("Something went wrong", { type: "error" });
      } finally {
        setLoading(false);
      }
    };

    fetchTopPosts();
  }, []);

  if (loading) {
    return <>Loading ...</>;
  }

  return (
    <>
      <div
        className={
          "mt-[25px] bg-[#F5F5F5] rounded-[12px] py-[20px] px-[15px] pl-[20px]"
        }
      >
        <h1
          className={
            "capitalize text-[20px] red-line text-[#3E3232] font-medium"
          }
        >
          top post
        </h1>
        <div className={"max-h-[500px] overflow-y-scroll no-scrollbar"}>
          {response.content.map((post, index) => {
            return (
              <>
                <Link
                  to={"/post/" + post.id}
                  key={index}
                  className={"mt-[20px] flex gap-[10px] items-center"}
                >
                  <div className={"size-[87px]"}>
                    <img
                      className={"object-cover w-full h-full rounded-[12px]"}
                      src={post.image.url}
                      alt={post.owner.firstname}
                    />
                  </div>
                  <div className={"flex-1"}>
                    <p className={"text-[13px] text-[#3E3232] font-medium"}>
                      {post.title}
                    </p>
                    <span
                      className={
                        "text-[#3E3232BF] text-[12px] line-clamp-2 font-normal mt-[6px]"
                      }
                      dangerouslySetInnerHTML={{
                        __html: removeImgTags(post.body),
                      }}
                    ></span>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopPosts;
