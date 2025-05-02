import {Menu} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import ProfileImage from "../../../assets/images/navImage.png";
import {useAppSelector} from "../../../hooks/hooks";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ProfileDropDown() {
    const [links] = useState([
        {
            name: "Profile",
            link: "/profile/posts"
        }, {
            name: "Settings",
            link: "/profile-edit"
        }, {
            name: "Logout",
            link: "/logout"
        }
    ]);
    const auth = useAppSelector((state) => state.auth);
    const name = auth.user?.firstname || "User";
    const navigate = useNavigate();

    console.log(auth.user)

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div className="flex items-center gap-2">
                <img
                    src={auth.user?.profileImage?.url || ProfileImage}
                    alt="profile"
                    className="w-12 h-12 rounded-lg"
                />
                <Menu.Button className="flex items-center gap-1 text-lg font-semibold text-gray-800">
                    {name} <ChevronDownIcon className="w-5 h-5"/>
                </Menu.Button>
            </div>

            <Menu.Items
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg focus:outline-none z-50">
                {
                    (Object.keys(auth.user).length !== 0) ? (links.map((opt) => (
                        <Menu.Item key={opt.name}>
                            {({active}) => (
                                <button
                                    className={`${
                                        active ? "bg-gray-100" : ""
                                    } block w-full text-left px-4 py-2 text-gray-700`}
                                    onClick={() => navigate(opt.link)}
                                >
                                    {opt.name}
                                </button>
                            )}
                        </Menu.Item>
                    ))) : ([{
                        name: "Login",
                        link: "/auth/login"
                    }, {
                        name: "Register",
                        link: "/auth/register"
                    }].map((opt) => (
                        <Menu.Item key={opt.name}>
                            {({active}) => (
                                <button
                                    className={`${
                                        active ? "bg-gray-100" : ""
                                    } block w-full text-left px-4 py-2 text-gray-700`}
                                    onClick={() => navigate(opt.link)}
                                >
                                    {opt.name}
                                </button>
                            )}
                        </Menu.Item>
                    )))
                }
            </Menu.Items>
        </Menu>
    )

}