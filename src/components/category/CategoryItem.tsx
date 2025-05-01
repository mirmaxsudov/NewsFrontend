import React from "react";
import { CategoryItemProps } from "../../types/category/CategoryItemType.ts";
import { Link } from "react-router-dom";

const CategoryItem: React.FC<CategoryItemProps> = ({ link, name, image }) => {
  return (
    <Link
      to={link}
      className="relative w-[170px] h-[48px] rounded-[12px] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="relative flex items-center justify-center w-full h-full">
        <p
          className={"text-[16px] text-[#fff] shadow-[#00000066] font-semibold"}
        >
          {name}
        </p>
      </div>
    </Link>
  );
};

export default CategoryItem;
