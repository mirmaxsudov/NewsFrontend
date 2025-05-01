import ManCity from "../../../assets/images/home/football/man.png";
import Liverpool from "../../../assets/images/home/football/liverpool.png";

const Final = () => {
  return (
    <>
      <div className={"w-[508px] py-[34px] px-[20px] bg-[#fff] rounded-[12px]"}>
        <h4 className={"text-center text-[#3E3232] font-medium text-[26px]"}>
          The final round
        </h4>
        <div className={"flex justify-between items-end"}>
          <div className={"size-[143px] mx-auto"}>
            <img
              className={"w-full h-full object-cover"}
              src={ManCity}
              alt="ManCity"
            />
          </div>
          <div className={"flex flex-col"}>
            <h1
              className={
                "text-[#FC4308] mb-[25px] text-[39px] text-center font-bold"
              }
            >
              VS
            </h1>
            <p className={"capitalize text-[#3E3232] text-[16px] font-medium"}>
              sunday , august 8th
            </p>
          </div>
          <div className={"size-[143px] mx-auto"}>
            <img
              className={"w-full h-full object-cover"}
              src={Liverpool}
              alt="Liverpool"
            />
          </div>
        </div>
        <div className={"flex justify-between items-center mt-[38px]"}>
          <div
            className={
              "bg-[#2F5C9F] w-full py-[10px] px-[21px] rounded-l-[12px] text-[#fff] font-medium text-[16px]"
            }
          >
            <p
              className={
                "capitalize text-center text-[12px] font-medium text-[#fff]"
              }
            >
              Manchester City
            </p>
          </div>
          <div
            className={
              "bg-[#E6E6E6] gap-[2px] p-[3px] rounded-[15px] flex text-[#fff] font-medium text-[12px]"
            }
          >
            <p
              className={
                "bg-[#3E3232] py-[14px] px-[20px] text-[25px] rounded-l-[12px]"
              }
            >
              00
            </p>
            <p
              className={
                "bg-[#3E3232] py-[14px] px-[20px] text-[25px] rounded-r-[12px]"
              }
            >
              00
            </p>
          </div>
          <div
            className={
              "bg-[#AA3034] w-full py-[10px] px-[21px] rounded-r-[12px] text-[#fff] font-medium text-[12px]"
            }
          >
            <p className={"capitalize text-center"}>Manchester City</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Final;
