import { JSX } from "react";
import "./MegaNewsInformation.css";

type INFORMATION_TYPE = {
  title: string;
  icon: JSX.Element;
};

const MegaNewsInformation = () => {
  const INFORMATION: INFORMATION_TYPE[] = [
    {
      title: "email : Management@mega.news",
      icon: (
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 0C15.3125 0 16 0.6875 16 1.5C16 2 15.75 2.4375 15.375 2.71875L8.59375 7.8125C8.21875 8.09375 7.75 8.09375 7.375 7.8125L0.59375 2.71875C0.21875 2.4375 0 2 0 1.5C0 0.6875 0.65625 0 1.5 0H14.5ZM6.78125 8.625C7.5 9.15625 8.46875 9.15625 9.1875 8.625L16 3.5V10C16 11.125 15.0938 12 14 12H2C0.875 12 0 11.125 0 10V3.5L6.78125 8.625Z"
            fill="#3E3232"
            fill-opacity="0.5"
          />
        </svg>
      ),
    },
    {
      title: "Phone number : +1(234) 567-8910",
      icon: (
        <svg
          width="12"
          height="20"
          viewBox="0 0 12 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 2H2.5C1.375 2 0.5 2.90625 0.5 4V16C0.5 17.125 1.375 18 2.5 18H9.5C10.5938 18 11.5 17.125 11.5 16V4C11.5 2.90625 10.5938 2 9.5 2ZM6 17C5.4375 17 5 16.5625 5 16C5 15.4688 5.4375 15 6 15C6.53125 15 7 15.4688 7 16C7 16.5625 6.53125 17 6 17ZM9.5 4V14H2.5V4H9.5Z"
            fill="#3E3232"
            fill-opacity="0.5"
          />
        </svg>
      ),
    },
    {
      title: "fax : +1(234) 567-8910",
      icon: (
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 4H12.1562L13 4.84375V7H15V4.4375C15 4.15625 14.875 3.90625 14.6875 3.71875L13.2812 2.3125C13.0938 2.125 12.8438 2 12.5625 2H5C4.4375 2 4 2.46875 4 3V7H6V4ZM2 6H1C0.4375 6 0 6.46875 0 7V17C0 17.5625 0.4375 18 1 18H2C2.53125 18 3 17.5625 3 17V7C3 6.46875 2.53125 6 2 6ZM15 8H4V17C4 17.5625 4.4375 18 5 18H15C15.5312 18 16 17.5625 16 17V9C16 8.46875 15.5312 8 15 8ZM9 15.5C9 15.7812 8.75 16 8.5 16H7.5C7.21875 16 7 15.7812 7 15.5V14.5C7 14.25 7.21875 14 7.5 14H8.5C8.75 14 9 14.25 9 14.5V15.5ZM9 11.5C9 11.7812 8.75 12 8.5 12H7.5C7.21875 12 7 11.7812 7 11.5V10.5C7 10.25 7.21875 10 7.5 10H8.5C8.75 10 9 10.25 9 10.5V11.5ZM13 15.5C13 15.7812 12.75 16 12.5 16H11.5C11.2188 16 11 15.7812 11 15.5V14.5C11 14.25 11.2188 14 11.5 14H12.5C12.75 14 13 14.25 13 14.5V15.5ZM13 11.5C13 11.7812 12.75 12 12.5 12H11.5C11.2188 12 11 11.7812 11 11.5V10.5C11 10.25 11.2188 10 11.5 10H12.5C12.75 10 13 10.25 13 10.5V11.5Z"
            fill="#3E3232"
            fill-opacity="0.5"
          />
        </svg>
      ),
    },
    {
      title: "Address : 1234 Foxrun St.New Lenox, IL 123456",
      icon: (
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 10C5.5 8.625 6.59375 7.5 8 7.5C9.375 7.5 10.5 8.625 10.5 10C10.5 11.4062 9.375 12.5 8 12.5C6.59375 12.5 5.5 11.4062 5.5 10ZM8 2C8.53125 2 9 2.46875 9 3V4.09375C11.5 4.53125 13.4688 6.5 13.9062 9H15C15.5312 9 16 9.46875 16 10C16 10.5625 15.5312 11 15 11H13.9062C13.4688 13.5312 11.5 15.5 9 15.9375V17C9 17.5625 8.53125 18 8 18C7.4375 18 7 17.5625 7 17V15.9375C4.46875 15.5 2.5 13.5312 2.0625 11H1C0.4375 11 0 10.5625 0 10C0 9.46875 0.4375 9 1 9H2.0625C2.5 6.5 4.46875 4.53125 7 4.09375V3C7 2.46875 7.4375 2 8 2ZM4 10C4 12.2188 5.78125 14 8 14C10.1875 14 12 12.2188 12 10C12 7.8125 10.1875 6 8 6C5.78125 6 4 7.8125 4 10Z"
            fill="#3E3232"
            fill-opacity="0.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="mega-news-information__section my-[50px]">
        <div className="container max-w-container mx-auto">
          <div className="mega-news-information__section-content flex flex-col lg:flex-row gap-[43px] w-full">
            <div className="w-full lg:w-[60%] lg:pe-[52px] py-[10px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.938806589923!2d69.22591597587532!3d41.32653217130773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bb7a0ebbae3%3A0xf9e01b5d45fc68cd!2sPDP%20Academy!5e0!3m2!1sru!2s!4v1743135133752!5m2!1sru!2s"
                width="100%"
                height="300"
                style={{
                  border: "0",
                  borderRadius: "20px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  overflow: "hidden",
                }}
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <h3 className="red-line text-[20px] font-medium text-[#3E3232] capitalize mb-[30px]">
                Mega news information
              </h3>
              <ul className="ms-[20px] information-list">
                {INFORMATION.map((item, index) => (
                  <li key={index} className="mb-[20px] text-[#3E3232]">
                    <div className="flex gap-[10px] items-center">
                      {item.icon}
                      <p>{item.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hidden bg-[#F5F5F5] mt-[18px] lg:flex items-center justify-center py-[10px] px-[22px] rounded-[12px] gap-[8px]">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25 5.75C7.25 5.34375 7.5625 5 8 5C8.40625 5 8.75 5.34375 8.75 5.75V9.625L11.4062 11.375C11.75 11.625 11.8438 12.0938 11.5938 12.4375C11.375 12.7812 10.9062 12.875 10.5625 12.625L7.5625 10.625C7.375 10.5 7.25 10.25 7.25 10V5.75ZM8 2C12.4062 2 16 5.59375 16 10C16 14.4375 12.4062 18 8 18C3.5625 18 0 14.4375 0 10C0 5.59375 3.5625 2 8 2ZM1.5 10C1.5 13.5938 4.40625 16.5 8 16.5C11.5625 16.5 14.5 13.5938 14.5 10C14.5 6.4375 11.5625 3.5 8 3.5C4.40625 3.5 1.5 6.4375 1.5 10Z"
                    fill="#3E3232"
                    fill-opacity="0.5"
                  />
                </svg>
                Responding 24 hours a day, 7 days a week
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MegaNewsInformation;
