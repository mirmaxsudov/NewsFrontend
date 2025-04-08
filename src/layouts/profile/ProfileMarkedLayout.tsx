import {NavLink, Outlet} from "react-router-dom";
import "./ProfileMarkedLayout.css";

const ProfileMarkedLayout = () => {
    return (
        <div className={"container max-w-container mx-auto"}>
            <div className={"m flex items-center gap-[24px] my-[20px]"}>
                <NavLink
                    className={"capitalize py-2 px-4 rounded-[12px] font-medium text-[#3E3232] profile-marked-link"}
                    to={"send-posts"}>
                    Posts
                </NavLink>
                <NavLink
                    className={"capitalize py-2 px-4 rounded-[12px] font-medium text-[#3E3232] profile-marked-link"}
                    to={"send-videos"}>
                    Videos
                </NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default ProfileMarkedLayout;