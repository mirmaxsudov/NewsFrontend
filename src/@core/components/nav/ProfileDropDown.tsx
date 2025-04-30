import {ChevronDown, ChevronUp} from "lucide-react";
import {useState} from "react";
import ProfileImage from "../../../assets/images/navImage.png";
import {useAppSelector} from "../../../hooks/hooks.ts";

const ProfileDropDown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const auth = useAppSelector(state => state.auth);

    return (
        <div className="relative text-left flex gap-[8px]">
            <img
                src={ProfileImage}
                alt="profile"
                className="size-[48px] rounded-[12px]"
            />
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-lg font-semibold text-gray-800"
            >
                {auth?.user?.firstname} {isOpen ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
                    <ul className="py-2 text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Profile
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Settings
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Logout
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProfileDropDown;
