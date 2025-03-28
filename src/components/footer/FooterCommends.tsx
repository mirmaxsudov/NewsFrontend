import { FooterCommend } from "../../types/footer/Footer";
import { v4 as uuid } from "uuid";

const FooterCommends = () => {
  const footerCommends: FooterCommend[] = [
    {
      id: uuid(),
      title: "ellsmartx",
      text: "how nice does this look 😍 I feel it should be delicious, thank you",
    },
    {
      id: uuid(),
      title: "cassia",
      text: "Take a rest, i'll be cheer up you again in 2 next game go go go",
    },
    {
      id: uuid(),
      title: "amanda",
      text: "you were stunning today, jan! 💗 great match 👍🏽👍🏽",
    },
    {
      id: uuid(),
      title: "Denis Simonassi",
      text: "It was a great match today Janzi! You did great😉🇩🇪",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-[20px] mt-[20px]">
        {footerCommends.map((commend) => FooterCommendItem(commend))}
      </div>
    </>
  );
};

const FooterCommendItem = (commend: FooterCommend) => {
  // Render the commend item here

  return (
    <div key={commend.id} className="flex flex-col gap-2 bg-[#F5F5F5] p-[16px] rounded-[12px]">
      <span className="text-[#3E3232]">{commend.title}</span>
      {/* Online first line */}
      <p className="line-clamp-1">{commend.text}</p>
    </div>
  );
};

export default FooterCommends;
