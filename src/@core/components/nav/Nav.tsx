import { Link } from "react-router-dom";
import CategoryDropDown from "./CategoryDropDown.tsx";
import NavSearchInput from "./NavSearchInput.tsx";
import ProfileDropDown from "./ProfileDropDown.tsx";
import PageDropDown from "./PageDropDown.tsx";
import { useState } from "react";

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <nav>
        <div className="container max-w-container p-4">
          <div id="toTop" className="nav__wrapper flex justify-between items-center py-[15px]">
            {showModal && (
              <div className="header-navigation">
                <div className="header-top">
                  <Link
                    to="/"
                    className="logo text-[#FC4308] text-[22px] font-bold"
                  >
                    MEGA.news
                  </Link>
                  <button onClick={handleShowModal} className="header-close">
                    <i className="bx bx-x"></i>
                  </button>
                </div>
                <div className="header-body">
                  <div className="flex flex-col gap-[24px]">
                    <CategoryDropDown />
                    <PageDropDown />
                    <Link to="/contact" className="capitalize">
                      contact us
                    </Link>
                    <Link to="/about-us" className="capitalize">
                      about us
                    </Link>
                    <Link to="/auth/login" className="capitalize">
                      Login
                    </Link>
                    <Link to="/auth/register" className="capitalize">
                      Registr
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <div className="sm:hidden footer-navigation">
              <Link to={'/'} className="footer-navigation--home">
                <i className="bx bxs-home"></i>Home
              </Link>
              <Link to={'/basket'} className="footer-navigation--button">
                <i className='bx bxs-bookmark' ></i>
              </Link>
              <Link to={'profile/posts'} className="footer-navigation--button">
                <i className="bx bxs-user"></i>
              </Link>
              <a href="#toTop" className="footer-navigation--button">
                <i className="bx bx-chevrons-up"></i>
              </a>
            </div>

            <div className="left flex items-center gap-[68px]">
              <div className="flex items-center gap-[20px]">
                <button
                  onClick={handleShowModal}
                  className="xl:hidden bg-[#F5F5F5] text-[24px] py-[5px] px-[10px] rounded-md"
                >
                  <i className="bx bx-menu"></i>
                </button>
                <Link
                  to="/"
                  className="hidden sm:block logo text-[#FC4308] text-[22px] font-bold"
                >
                  MEGA.news
                </Link>
              </div>

              <div className="hidden xl:flex gap-[34px]">
                <CategoryDropDown />
                <PageDropDown />
                <Link to="/contact" className="capitalize">
                  contact us
                </Link>
                <Link to="/about-us" className="capitalize">
                  about us
                </Link>
              </div>
            </div>
            <div className="right flex items-center gap-[25px] ">
              <div className="sm:hidden md:block">
                <NavSearchInput />
              </div>
              <div className="hidden sm:block ">
                <ProfileDropDown />
              </div>
              <div className="hidden sm:block ">
                <Link
                  to="/basket"
                  className="bg-[#F5F5F5] size-[48px] flex justify-center items-center rounded-[12px] ml-[25px]"
                >
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.625 0H2.375C1.32031 0 0.5 0.859375 0.5 1.875V18.75C0.5 19.7266 1.51562 20.3125 2.375 19.8438L8 16.5625L13.5859 19.8438C14.4453 20.3125 15.5 19.7266 15.5 18.75V1.875C15.5 0.859375 14.6406 0 13.625 0ZM13.625 17.6562L8 14.375L2.375 17.6562V2.10938C2.375 1.99219 2.45312 1.875 2.57031 1.875H13.3516C13.5078 1.875 13.625 1.99219 13.625 2.10938V17.6562Z"
                      fill="#3E3232"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden sm:block md:hidden">
            <NavSearchInput />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
