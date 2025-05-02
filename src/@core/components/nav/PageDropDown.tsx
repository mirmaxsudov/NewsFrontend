import {Menu} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function PageDropDown() {
    const [pages] = useState([
        {
            name: "Home",
            link: "/"
        }, {
            name: "About",
            link: "/about-us"
        }, {
            name: "Contact",
            link: "/contact"
        }
    ]);
    const navigate = useNavigate();

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center gap-1 text-lg font-semibold text-gray-800">
                Pages <ChevronDownIcon className="w-5 h-5"/>
            </Menu.Button>
            <Menu.Items
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg focus:outline-none z-50">
                {pages.map((pg) => (
                    <Menu.Item key={pg.name}>
                        {({active}) => (
                            <button
                                className={`${
                                    active ? "bg-gray-100" : ""
                                } block w-full text-left px-4 py-2 text-gray-700`}
                                onClick={() => navigate(pg.link)}
                            >
                                {pg.name}
                            </button>
                        )}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    );
}