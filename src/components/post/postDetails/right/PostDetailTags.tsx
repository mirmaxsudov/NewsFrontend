import { useState } from "react";

type TagType = {
  tag: string;
};

const PostDetailTags = () => {
  const [tags] = useState<TagType[]>([
    { tag: "Montenegro" },
    { tag: "Visit Croatia" },
    { tag: "Luxury Travel" },
    { tag: "Travel Log" },
    { tag: "Paradise Island" },
    { tag: "Travel Info" },
  ]);

  return (
    <>
      <div
        className={
          "mt-[25px] bg-[#F5F5F5] rounded-[12px] py-[20px] px-[15px] ps-[20px]"
        }
      >
        <h1
          className={
            "capitalize red-line text-[#3E3232] text-[20px] font-medium mb-[20px]"
          }
        >
          Tags
        </h1>
        <div className={"flex flex-wrap gap-[10px]"}>
          {tags.map((tag, index) => (
            <span
              key={index}
              className={
                "capitalize text-[13px] text-[#3E3232BF] font-medium bg-[#F5F5F5]"
              }
            >
              {tag.tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostDetailTags;
