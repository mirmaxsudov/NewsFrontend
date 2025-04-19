import Something1 from "../../../../../public/images/something/something1.png"
import Something2 from "../../../../../public/images/something/something2.png"
import {useState} from "react";

const Something = () => {
    const [images] = useState<string[]>([
        Something1,
        Something2
    ]);
    return (
        <>
            <div className={"mt-[25px] flex flex-col gap-[25px]"}>
                {
                    images.map((image, index) => (
                        <div key={index}
                             className={"w-[360px] text-[#fff] flex flex-col items-center justify-center h-[180px] rounded-[12px]"} style={{
                            backgroundImage: `url(${image})`
                        }}>
                            <h5 className={"text-[20px]"}>Advertising</h5>
                            <p className={"text-[13px]"}>360 px * 180px</p>
                        </div>))
                }
            </div>
        </>
    )
}

export default Something;