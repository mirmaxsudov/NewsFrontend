import React, {useState} from "react";
import NewsInput from "../../../input/NewsInput.tsx";
import {InputEnum} from "../../../../enums/inputEnum.ts";

const AddComment: React.FC = () => {
    const [setName] = useState<string>("");
    const [setWebsite] = useState<string>("");
    const [setEmail] = useState<string>("");
    const [setComment] = useState<string>("")

    return (<>
        <section>
            <h1 className={"capitalize red-line text-[#3E3232] font-medium text-[20px]"}>
                Add Comment
            </h1>
            <div className={"grid grid-cols-2 grid-rows-1 mt-[30px] gap-[24px]"}>
                <div className={"flex flex-col gap-[20px]"}>
                    <NewsInput type={InputEnum.TEXT} onChange={setName} label={"name"}/>
                    <NewsInput type={InputEnum.TEXT} onChange={setWebsite} label={"website"}/>
                    <NewsInput type={InputEnum.EMAIL} onChange={setEmail} label={"email"}/>
                </div>
                <div>
                    <label className="flex flex-col gap-[15px]">
                        <span className="text-[#3E3232] text-[16px] inline-block capitalize font-medium">
                          Comment
                        </span>
                        <textarea
                            className={`text-[#3E3232] h-[250px] focus:outline-none focus:ring-1 inline-block focus:ring-[#3E3232] bg-[#F5F5F5] py-[10px] px-[16px] rounded-[12px]`}
                            placeholder={"Search anything"}
                        />
                    </label>
                </div>
            </div>
        </section>
    </>)
}

export default AddComment;