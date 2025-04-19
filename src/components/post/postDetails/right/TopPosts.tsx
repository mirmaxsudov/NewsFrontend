import Post1 from "../../../../../public/images/post/post1.png"
import Post2 from "../../../../../public/images/post/post2.png"
import Post3 from "../../../../../public/images/post/post3.png"
import {useState} from "react";

type PostType = {
    image: string;
    title: string;
    description: string;
}

const TopPosts = () => {
    const [posts] = useState<PostType[]>([
        {
            image: Post1,
            title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
            description: "Subhead"
        }, {
            image: Post2,
            title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
            description: "Subhead"
        }, {
            image: Post3,
            title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
            description: "Subhead"
        }, {
            image: Post1,
            title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
            description: "Subhead"
        }, {
            image: Post2,
            title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
            description: "Subhead"
        }, {
            image: Post3,
            title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
            description: "Subhead"
        }
    ])
    return (
        <>
            <div className={"mt-[25px] bg-[#F5F5F5] rounded-[12px] py-[20px] px-[15px] pl-[20px]"}>
                <h1 className={"capitalize text-[20px] red-line text-[#3E3232] font-medium"}>
                    top post
                </h1>
                <div className={"max-h-[500px] overflow-y-scroll no-scrollbar"}>
                    {
                        posts.map((post, index) => {
                            return (
                                <>
                                    <div key={index} className={"mt-[20px] flex gap-[10px] items-center"}>
                                        <div className={"size-[87px]"}>
                                            <img className={"object-cover w-full h-full rounded-[12px]"}
                                                 src={post.image}
                                                 alt={post.description}/>
                                        </div>
                                        <div className={"flex-1"}>
                                            <p className={"text-[13px] text-[#3E3232] font-medium"}>
                                                {post.title}
                                            </p>
                                            <span className={"text-[#3E3232BF] text-[12px] font-normal mt-[6px]"}>
                                                {post.description}
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TopPosts;