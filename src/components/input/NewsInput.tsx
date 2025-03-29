import { useRef } from "react";
import { InputEnum } from "../../enums/inputEnum";

type NewsInputProps = {
  label: string;
  type: InputEnum;
  onChange: (value: string) => void;
};

const NewsInput = ({ label, type, onChange }: NewsInputProps) => {
  const placeHolder = "";
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (inputRef.current) onChange(inputRef.current.value);
  };

  return (
    <>
      <label className="flex flex-col gap-[15px]">
        <span className="text-[#3E3232] text-[16px] inline-block capitalize font-medium">
          {label}
        </span>
        <input
          className="text-[#3E3232] font-medium focus:outline-none focus:ring-1 focus:ring-[#3E3232] transition-all duration-300 bg-[#F5F5F5] py-[10px] px-[16px] rounded-[12px]"
          placeholder={placeHolder}
          ref={inputRef}
          type={type}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default NewsInput;
