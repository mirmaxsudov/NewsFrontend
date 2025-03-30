import {NavLink, Outlet} from "react-router-dom";
import "./ProfilePostLayout.css"

const ProfilePostLayout = () => {
    return (
        <>
            <section>
                <div className={"container max-w-container mx-auto"}>
                    <div className={"flex items-center gap-[5px] my-[50px]"}>
                        <NavLink to={"post"} className={"profile-post-layout__link py-[10px] px-[20px] rounded-[12px] capitalize font-medium"}>
                            send post
                        </NavLink>
                        <NavLink to={"video"} className={"profile-post-layout__link py-[10px] px-[20px] rounded-[12px] capitalize font-medium"}>
                            send video
                        </NavLink>
                    </div>

                    <Outlet/>
                </div>
            </section>
        </>
    )
}

export default ProfilePostLayout;