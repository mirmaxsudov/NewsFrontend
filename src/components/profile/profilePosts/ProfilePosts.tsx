import ChartComponent from "./ChartComponent.tsx";
import "./ProfilePosts.css";
import ProfilePostsReaction from "./ProfilePostsReaction.tsx";
import ReactionTypeIcon from "../../../enums/ReactionTypeIcon.ts";

const ProfilePosts = () => {
    const profileReactionsData = [
        {
            id: 1,
            date: "August 2022",
            icon: ReactionTypeIcon.FIVE_START,
            points: 20
        },
        {
            id: 1,
            date: "August 2022",
            icon: ReactionTypeIcon.FIVE_START,
            points: 20
        },
        {
            id: 1,
            date: "August 2022",
            icon: ReactionTypeIcon.FOUR_START,
            points: 20
        },
        {
            id: 1,
            date: "August 2022",
            icon: ReactionTypeIcon.ONE_START,
            points: 20
        },
        {
            id: 1,
            date: "August 2022",
            icon: ReactionTypeIcon.ONE_START,
            points: 20
        },
        {
            id: 1,
            date: "August 2022",
            icon: ReactionTypeIcon.ONE_START,
            points: 20
        },
        {
            id: 1,
            date: "August 2022",
            icon: ReactionTypeIcon.ONE_START,
            points: 20
        },
        {
            id: 1,
            date: "August 2022",
            icon: ReactionTypeIcon.ONE_START,
            points: 20
        },
        {
            id: 1,
            date: "August 2022",
            icon: ReactionTypeIcon.ONE_START,
            points: 20
        },
    ]

    return (
        <>
            <div className={"container max-w-container mx-auto my-[45px]"}>
                <div className={"grid grid-cols-12 gap-[24px]"}>
                    <div className={"chart col-span-9"}>
                        <h3 className={"red-line capitalize text-[#3E3232] text-[22px] font-medium"}>
                            View posts
                        </h3>
                        <div className={"chart__wrapper p-4 rounded-[12px] mt-[30px]"}>
                            <ChartComponent/>
                        </div>
                    </div>
                    <div className={"stats col-span-3"}>
                        <h3 className={"red-line capitalize text-[#3E3232] text-[22px] font-medium"}>
                            Satisfaction of posts
                        </h3>
                        <div
                            className={"grid grid-cols-3 grid-rows-3 gap-[12px] mt-[30px] reactions__wrapper p-[12px] rounded-[12px]"}>
                            {
                                profileReactionsData.map((data) => {
                                    return <ProfilePostsReaction data={data}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePosts;