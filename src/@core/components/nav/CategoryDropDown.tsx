import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const CategoryDropDown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-lg font-semibold text-gray-800"
      >
        Categories{" "}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
          <ul className="py-2 text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Category 1
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Category 2
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Category 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryDropDown;
