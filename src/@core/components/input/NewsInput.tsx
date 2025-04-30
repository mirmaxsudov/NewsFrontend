import {useRef} from "react";
import {InputEnum} from "../../../enums/inputEnum.ts";

type NewsInputProps = {
    className?: string,
    label: string;
    type: InputEnum;
    val?: string | number | undefined;
    onChange: (value: string) => void;
};

const NewsInput = ({className, label, type, onChange, val}: NewsInputProps) => {
    const placeHolder = "";
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = () => {
        if (inputRef.current) onChange(inputRef.current.value);
    };

    return (
        <div className={"w-full"}>
            <label className="flex flex-col gap-[15px]">
        <span className="text-[#3E3232] text-[16px] inline-block capitalize font-medium">
          {label}
        </span>
                <input
                    defaultValue={val}
                    value={val}
                    className={`text-[#3E3232] font-medium focus:outline-none focus:ring-1 inline-block focus:ring-[#3E3232] transition-all duration-300 bg-[#F5F5F5] py-[10px] px-[16px] rounded-[12px] ${className} `}
                    placeholder={placeHolder}
                    ref={inputRef}
                    type={type}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
};

export default NewsInput;
