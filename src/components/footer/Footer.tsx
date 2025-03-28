import { Link } from "react-router-dom";
import "./Footer.css";
import { memo } from "react";
import FooterCommends from "./FooterCommends";
import FollowOnInstagram from "../aboutUs/FollowOnInstagram";

const Footer = memo(() => {
  return (
    <footer className="footer mt-[50px]">
      <div className="container max-w-container mx-auto">
        <div className="footer-content grid grid-cols-2 gap-[64px]">
          <div>
            <div className="grid grid-cols-3 gap-[50px]">
              <div className="col-span-2">
                <h3 className="red-line text-[#3E3232] text-[22px] font-medium capitalize">
                  mega news
                </h3>
                <p className="text-[#3E3232BF] text-[14px] mt-[20px] text-justify me-[100px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                  congue mauris rhoncus aenean vel elit scelerisque. In egestas
                  erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                  tristique senectus et netus. Mattis pellentesque id nibh
                  tortor id aliquet lectus proin
                </p>
              </div>
              <div>
                <h3 className="red-line text-[#3E3232] mb-[20px] text-[22px] font-medium capitalize">
                  Categories
                </h3>
                <ul className="flex flex-col gap-[17px]">
                  {[
                    "Culture",
                    "Fashion",
                    "Featured",
                    "Food",
                    "Healthy Living",
                    "Technology",
                  ].map((category, index) => {
                    return (
                      <li key={index} className="text-[#3E3232BF] text-[14px]">
                        <Link to={`/category/${category}`}>{category}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[54px]">
              <div className="col-span-2">
                <h3 className="mt-[31px] red-line text-[#3E3232] text-[22px] font-medium capitalize">
                  Newsletters
                </h3>
                <div className="flex items-center h-[40px] gap-[20px] rounded-[12px] justify-between py-[17px] px-[8px] bg-[#FFFFFF] mt-[20px]">
                  <input
                    className="focus:outline-none active:outline-none w-full"
                    type="text"
                    placeholder="Write your email .."
                  />
                  <svg
                    className="me-[4px]"
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.125 0.5C19.1406 0.5 20 1.35938 20 2.375C20 3 19.6875 3.54688 19.2188 3.89844L10.7422 10.2656C10.2734 10.6172 9.6875 10.6172 9.21875 10.2656L0.742188 3.89844C0.273438 3.54688 0 3 0 2.375C0 1.35938 0.820312 0.5 1.875 0.5H18.125ZM8.47656 11.2812C9.375 11.9453 10.5859 11.9453 11.4844 11.2812L20 4.875V13C20 14.4062 18.8672 15.5 17.5 15.5H2.5C1.09375 15.5 0 14.4062 0 13V4.875L8.47656 11.2812Z"
                      fill="#3E3232"
                      fillOpacity="0.75"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="mt-[31px] red-line text-[#3E3232] mb-[20px] text-[22px] font-medium capitalize">
                  social network
                </h3>
                <div className="flex items-center gap-[15px]">
                  <div className="istagram flex h-[40px] items-center gap-[8px] py-[13px] px-[17px] rounded-[12px] capitalize text-white text-[12px]">
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 3.60547C5.25 3.60547 3.85547 5.02734 3.85547 6.75C3.85547 8.5 5.25 9.89453 7 9.89453C8.72266 9.89453 10.1445 8.5 10.1445 6.75C10.1445 5.02734 8.72266 3.60547 7 3.60547ZM7 8.80078C5.87891 8.80078 4.94922 7.89844 4.94922 6.75C4.94922 5.62891 5.85156 4.72656 7 4.72656C8.12109 4.72656 9.02344 5.62891 9.02344 6.75C9.02344 7.89844 8.12109 8.80078 7 8.80078ZM10.9922 3.49609C10.9922 3.90625 10.6641 4.23438 10.2539 4.23438C9.84375 4.23438 9.51562 3.90625 9.51562 3.49609C9.51562 3.08594 9.84375 2.75781 10.2539 2.75781C10.6641 2.75781 10.9922 3.08594 10.9922 3.49609ZM13.0703 4.23438C13.0156 3.25 12.7969 2.375 12.0859 1.66406C11.375 0.953125 10.5 0.734375 9.51562 0.679688C8.50391 0.625 5.46875 0.625 4.45703 0.679688C3.47266 0.734375 2.625 0.953125 1.88672 1.66406C1.17578 2.375 0.957031 3.25 0.902344 4.23438C0.847656 5.24609 0.847656 8.28125 0.902344 9.29297C0.957031 10.2773 1.17578 11.125 1.88672 11.8633C2.625 12.5742 3.47266 12.793 4.45703 12.8477C5.46875 12.9023 8.50391 12.9023 9.51562 12.8477C10.5 12.793 11.375 12.5742 12.0859 11.8633C12.7969 11.125 13.0156 10.2773 13.0703 9.29297C13.125 8.28125 13.125 5.24609 13.0703 4.23438ZM11.7578 10.3594C11.5664 10.9062 11.1289 11.3164 10.6094 11.5352C9.78906 11.8633 7.875 11.7812 7 11.7812C6.09766 11.7812 4.18359 11.8633 3.39062 11.5352C2.84375 11.3164 2.43359 10.9062 2.21484 10.3594C1.88672 9.56641 1.96875 7.65234 1.96875 6.75C1.96875 5.875 1.88672 3.96094 2.21484 3.14062C2.43359 2.62109 2.84375 2.21094 3.39062 1.99219C4.18359 1.66406 6.09766 1.74609 7 1.74609C7.875 1.74609 9.78906 1.66406 10.6094 1.99219C11.1289 2.18359 11.5391 2.62109 11.7578 3.14062C12.0859 3.96094 12.0039 5.875 12.0039 6.75C12.0039 7.65234 12.0859 9.56641 11.7578 10.3594Z"
                        fill="white"
                      />
                    </svg>
                    instagram
                  </div>
                  <div className="twitter size-[40px] flex justify-center items-center gap-[8px] rounded-[12px] capitalize text-white text-[12px]">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[24px]">
            <div>
              <h3 className="red-line text-[#3E3232] text-[22px] font-medium capitalize">
                new Comments
              </h3>
              <FooterCommends />
            </div>
            <div>
              <h3 className="red-line text-[#3E3232] text-[22px] font-medium capitalize">
                Follow on Instagram
              </h3>
              <FollowOnInstagram />
            </div>
          </div>
        </div>
        <div className="footer-bar text-[#3E3232BF] text-[12px] font-normal">
          <span>Privacy Policy | Terms & Conditions</span>
          <span>All Copyright (C) {new Date().getFullYear()} Reserved</span>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
