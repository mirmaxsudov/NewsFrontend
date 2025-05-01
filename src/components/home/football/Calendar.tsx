import Icon1 from "../../../assets/images/home/football/icon1.png";
import Icon2 from "../../../assets/images/home/football/icon2.png";
import Icon3 from "../../../assets/images/home/football/icon3.png";
import Icon4 from "../../../assets/images/home/football/icon4.png";
import Icon5 from "../../../assets/images/home/football/icon5.png";

const Calendar = () => {
  const data = [
    { date: 26, isNow: false },
    { date: 27, isNow: false },
    {
      date: <img src={Icon1} alt="icon1" className="w-5 h-5 mx-auto" />,
      isNow: false,
    },
    { date: 29, isNow: false },
    { date: 30, isNow: false },
    { date: 31, isNow: false },
    { date: 1, isNow: true },
    { date: 2, isNow: true },
    { date: 3, isNow: true },
    {
      date: <img src={Icon2} alt="icon2" className="w-5 h-5 mx-auto" />,
      isNow: true,
    },
    { date: 5, isNow: true },
    { date: 6, isNow: true },
    { date: 7, isNow: true },
    { date: 8, isNow: true },
    { date: 9, isNow: true },
    { date: 10, isNow: true },
    { date: 11, isNow: true },
    { date: 12, isNow: true },
    { date: 13, isNow: true },
    { date: 14, isNow: true },
    {
      date: <img src={Icon3} alt="icon3" className="w-5 h-5 mx-auto" />,
      isNow: true,
    },
    { date: 16, isNow: true },
    { date: 17, isNow: true },
    { date: 18, isNow: true },
    {
      date: <img src={Icon4} alt="icon4" className="w-5 h-5 mx-auto" />,
      isNow: true,
    },
    { date: 20, isNow: true },
    { date: 21, isNow: true },
    { date: 22, isNow: true },
    { date: 23, isNow: true },
    { date: 24, isNow: true },
    { date: 25, isNow: true },
    { date: 26, isNow: true },
    { date: 27, isNow: true },
    { date: 28, isNow: true },
    { date: 29, isNow: true },
    { date: 30, isNow: true },
    {
      date: <img src={Icon4} alt="icon4-2" className="w-5 h-5 mx-auto" />,
      isNow: false,
    },
    { date: 1, isNow: false },
    { date: 2, isNow: false },
    { date: 3, isNow: false },
    { date: 4, isNow: false },
    {
      date: <img src={Icon5} alt="icon5" className="w-5 h-5 mx-auto" />,
      isNow: false,
    },
  ];

  return (
    <div className="bg-[#FFFFFF] p-4 w-[360px] rounded-[12px] shadow">
      <h3 className="capitalize text-lg font-semibold mb-2">Jan 2022</h3>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {["su", "mo", "tu", "we", "th", "fr", "sa"].map((day) => (
          <div
            className="text-[#3E323280] capitalize text-[16px] font-medium"
            key={day}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {data.map((item, index) => (
          <div
            key={index}
            className={`p-2 rounded-full ${
              item.isNow
                ? "bg-[#F3F4F6] text-black font-semibold"
                : "text-gray-500"
            }`}
          >
            {typeof item.date === "number" ? item.date : item.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
