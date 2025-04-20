import UserImage from "../../../../../public/images/users/user.png"
import UserPreviewType from "../../../../types/user/UserType.ts";

type UserProfilePropsType = {
    owner: UserPreviewType
}

const UserProfile = ({owner}: UserProfilePropsType) => {
    return (
        <>
            <div className={"bg-[#F5F5F5] p-[15px] rounded-[12px]"}>
                <div className={"flex items-center gap-[10px]"}>
                    <div className={"size-[87px]"}>
                        <img
                            className={"object-cover w-full h-full rounded-[6px]"}
                            src={!owner.profileImage ? UserImage : owner.profileImage.url} alt={"User Image"}/>
                    </div>
                    <div className={"flex-1"}>
                        <div className={"flex justify-between items-center"}>
                            <h6 className={"text-[#3E3232] text-[16px] font-medium"}>
                                {owner.firstname}
                            </h6>
                            <p className={"text-[12px] text-[#3E3232BF] font-normal"}>
                                27 post
                            </p>
                        </div>
                        <button
                            className={"mt-[16px] text-[14px] font-medium py-[10px] px-[16px] rounded-[12px] capitalize flex items-center gap-[8px] bg-[#F81539BF] text-[#fff]"}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.6875 5.75C11.6875 6.24219 11.2773 6.65234 10.8125 6.65234H6.875V10.5898C6.875 11.0547 6.46484 11.4375 6 11.4375C5.50781 11.4375 5.125 11.0547 5.125 10.5898V6.65234H1.1875C0.695312 6.65234 0.3125 6.24219 0.3125 5.75C0.3125 5.28516 0.695312 4.90234 1.1875 4.90234H5.125V0.964844C5.125 0.472656 5.50781 0.0625 6 0.0625C6.46484 0.0625 6.875 0.472656 6.875 0.964844V4.90234H10.8125C11.2773 4.875 11.6875 5.28516 11.6875 5.75Z"
                                    fill="white"/>
                            </svg>
                            follow
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;