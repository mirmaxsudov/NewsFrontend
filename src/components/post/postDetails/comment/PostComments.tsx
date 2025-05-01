import UserImage from "../../../../../public/images/users/user.png";
import { useState } from "react";
import PostCommentItem from "./PostCommentItem.tsx";
import AddComment from "./AddComment.tsx";
import PostRate from "./PostRate.tsx";

export type CommentType = {
  id: number;
  img: string;
  firstname: string;
  commentAt: string;
  comment: string;
  children?: CommentType[];
};

const PostComments = () => {
  const [comments] = useState<CommentType[]>([
    {
      id: 1,
      img: UserImage,
      firstname: "Jon Kantner",
      commentAt: "2022 04 July",
      comment:
        "When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats.",
      children: [
        {
          id: 2,
          img: UserImage,
          firstname: "Cassie Evans",
          commentAt: "2022 04 July",
          comment:
            "a river or a lake island may be called an eyot or ait, and a small island off the coast may be called a holm. Sedimentary islands in the Ganges delta are called chars. A grouping of geographically or geologically related islands, such as the Philippines, is referred to as an archipelago. ",
        },
        {
          id: 3,
          img: UserImage,
          firstname: "behzad pashaei",
          commentAt: "2022 04 July",
          comment:
            "Oceanic islands are often considered to be islands that do not sit on continental shelves. Other definitions limit the term to only refer to islands with no past geological connections to a continental landmass.The vast majority are volcanic in origin, such as Saint Helena in the South Atlantic Ocean.",
        },
        {
          id: 3,
          img: UserImage,
          firstname: "behzad pashaei",
          commentAt: "2022 04 July",
          comment:
            "Oceanic islands are often considered to be islands that do not sit on continental shelves. Other definitions limit the term to only refer to islands with no past geological connections to a continental landmass.The vast majority are volcanic in origin, such as Saint Helena in the South Atlantic Ocean.",
        },
      ],
    },
    {
      id: 4,
      img: UserImage,
      firstname: "Patricia",
      commentAt: "2022 04 July",
      comment:
        "An island (or isle) is an isolated piece of habitat that is surrounded by a dramatically different habitat, such as water. Very small islands such as emergent land features on atolls can be called islets, skerries, cays or keys.",
    },
  ]);

  return (
    <>
      <section className={"mt-[50px]"}>
        <h1
          className={
            "capitalize red-line text-[#3E3232] font-medium text-[20px] mb-[30px]"
          }
        >
          Comments
        </h1>
        {comments.map((comment, index) => (
          <PostCommentItem
            key={index}
            comment={comment}
            isLast={index === comments.length - 1}
            isFirst={index === 0}
          />
        ))}
        <AddComment />
        <PostRate />
      </section>
    </>
  );
};

export default PostComments;
