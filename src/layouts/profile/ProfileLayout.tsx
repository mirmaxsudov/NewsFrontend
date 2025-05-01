import { NavLink, Outlet } from "react-router-dom";
import ProfileLayoutBanner from "../../assets/images/profile/banner.png";
import ProfileImage from "../../assets/images/profile/profileImage.png";
import NewsButton from "../../@core/components/btns/NewsButton.tsx";
import "./ProfilePostLayout.css";

const ProfileLayout = () => {
  return (
    <>
      <section className={"profile-layout__section"}>
        <div className={"container max-w-container mx-auto"}>
          <div
            className={
              "profile-layout__content bg-[#F5F5F5] rounded-[12px] p-[12px]"
            }
          >
            <div className={"profile-layout__banner rounded-[12px]"}>
              <img
                className={"object-cover w-full h-full rounded-[12px]"}
                src={ProfileLayoutBanner}
                alt={"Profile Banner"}
              />
            </div>
            <div className={"flex items-center justify-between mt-[15px]"}>
              <div className={"f flex items-center gap-[10px]"}>
                <img
                  className={"w-[75px] h-[75px] rounded-[12px]"}
                  src={ProfileImage}
                  alt={"Profile Image"}
                />
                <p className={"text-[#3E3232] text-[16px] font-medium"}>
                  Louis Hoebregts
                </p>
              </div>
              <div className={"m flex items-center gap-[34px]"}>
                <NavLink
                  className={
                    "capitalize font-medium text-[#3E3232] profile-link"
                  }
                  to={"marked"}
                >
                  marked
                </NavLink>
                <NavLink
                  className={
                    "capitalize font-medium text-[#3E3232] profile-link"
                  }
                  to={"send"}
                >
                  send post
                </NavLink>
                <NavLink
                  className={
                    "capitalize font-medium text-[#3E3232] profile-link"
                  }
                  to={"posts"}
                >
                  posts
                </NavLink>
              </div>
              <div className={"l"}>
                <NewsButton
                  className={"font-medium"}
                  isLink={true}
                  link={"/profile-edit"}
                  bgColor={"bg-[#F5F5F5] border border-[#E6E6E6]"}
                  textColor={"text-[#F81539BF]"}
                >
                  <>
                    <svg
                      width="18"
                      height="15"
                      viewBox="0 0 18 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.34766 7.75C8.26172 7.75 9.84766 6.19141 9.84766 4.25C9.84766 2.33594 8.26172 0.75 6.34766 0.75C4.43359 0.75 2.875 2.33594 2.875 4.25C2.875 6.19141 4.43359 7.75 6.34766 7.75ZM7.74219 9.0625H4.98047C2.35547 9.0625 0.25 11.1953 0.25 13.8203C0.25 14.3398 0.660156 14.75 1.17969 14.75H9.02734C8.97266 14.6133 8.97266 14.4492 9 14.2852L9.41016 12.3438C9.46484 12.0703 9.57422 11.8242 9.76562 11.6328L11.0234 10.4023C10.1758 9.58203 9.02734 9.0625 7.74219 9.0625ZM10.3945 12.2617C10.3125 12.3438 10.2852 12.4258 10.2578 12.5078L9.875 14.4766C9.82031 14.6406 9.98438 14.8047 10.1484 14.75L12.1172 14.3672C12.1992 14.3398 12.2812 14.3125 12.3633 14.2305L15.7812 10.8125L13.8125 8.84375L10.3945 12.2617ZM17.4492 7.75L16.875 7.17578C16.4922 6.79297 15.8633 6.79297 15.4805 7.17578L14.4414 8.21484L16.4102 10.1836L17.4492 9.14453C17.832 8.76172 17.832 8.13281 17.4492 7.75Z"
                        fill="#F81539"
                        fill-opacity="0.75"
                      />
                    </svg>
                    Edit Profile
                  </>
                </NewsButton>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </section>
    </>
  );
};

export default ProfileLayout;
