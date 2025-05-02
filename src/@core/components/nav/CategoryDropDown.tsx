import {Menu} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import {useState} from "react";
import CategoryItemTitle from "../../../enums/CategoryItemTitle.ts";
import {useNavigate} from "react-router-dom";

export default function CategoryDropDown() {
    const [options] = useState([
        {
            name: CategoryItemTitle.FOOD,
            link: "/category/FOOD",
        },
        {
            name: CategoryItemTitle.ANIMAL,
            link: "/category/ANIMAL",
        },
        {
            name: CategoryItemTitle.CAR,
            link: "/category/CAR",
        },
        {
            name: CategoryItemTitle.SPORT,
            link: "/category/SPORT",
        },
        {
            name: CategoryItemTitle.MUSIC,
            link: "/category/MUSIC",
        },
        {
            name: CategoryItemTitle.TECHNOLOGY,
            link: "/category/TECHNOLOGY",
        },
        {
            name: CategoryItemTitle.ABSTRACT,
            link: "/category/ABSTRACT",
        },
    ]);
    const navigate = useNavigate();

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center gap-1 text-lg font-semibold text-gray-800">
                Categories <ChevronDownIcon className="w-5 h-5"/>
            </Menu.Button>

            <Menu.Items
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg focus:outline-none z-50">
                {options.map((opt) => (
                    <Menu.Item key={opt.name.toString()}>
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
                ))}
            </Menu.Items>
        </Menu>
    );
}
