import UserPreviewType from "../../../types/user/UserType.ts";

type PostItemOwnerProps = {
    user: UserPreviewType;
}

const PostItemOwner = (
    {user}: PostItemOwnerProps
) => {
    console.log(user);
    return (<>
        <div className={"bg-[#F5F5F5] py-[14px] px-[16px] flex items-center justify-between"}>
            <div className={"flex"}>
                <div className={"size-[44px] flex justify-start items-center"}>
                    {
                        user?.profileImage ?
                            <img src={"http://localhost:8080/api/v1/attachment/" + user?.profileImage?.id}
                                 alt={user.firstname}/> :
                            <>
                                IMG
                            </>
                    }
                </div>
                <div className={"flex flex-col"}>
                    <p className={"text-[#3E3232] text-[16px] font-medium"}>{user?.firstname}</p>
                    <p className={"text-[#3E3232] text-[12px] font-normal"}>{user?.joinedAt}</p>
                </div>
            </div>
            <div>
                <button>
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.625 0H2.375C1.32031 0 0.5 0.859375 0.5 1.875V18.75C0.5 19.7266 1.51562 20.3125 2.375 19.8438L8 16.5625L13.5859 19.8438C14.4453 20.3125 15.5 19.7266 15.5 18.75V1.875C15.5 0.859375 14.6406 0 13.625 0ZM13.625 17.6562L8 14.375L2.375 17.6562V2.10938C2.375 1.99219 2.45312 1.875 2.57031 1.875H13.3516C13.5078 1.875 13.625 1.99219 13.625 2.10938V17.6562Z"
                            fill="#3E3232" fill-opacity="0.5"/>
                    </svg>
                </button>
            </div>
        </div>
    </>);
}

export default PostItemOwner;