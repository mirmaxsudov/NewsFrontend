import Car1 from "../../assets/images/footerImages/Car1.png";
import Dog1 from "../../assets/images/footerImages/Dog1.png";
import Dog2 from "../../assets/images/footerImages/Dog2.png";
import Phone1 from "../../assets/images/footerImages/Phone1.png";
import HotDog1 from "../../assets/images/footerImages/HotDog1.png";
import EarN1 from "../../assets/images/footerImages/EarN1.png";
import Light1 from "../../assets/images/footerImages/Light1.png";
import Box1 from "../../assets/images/footerImages/Box1.png";
import { useMemo } from "react";

const FollowOnInstagram = () => {
  const images = useMemo(() => {
    return [Car1, Dog2, Phone1, HotDog1, EarN1, Dog1, Dog1, Light1, Box1];
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-[24px] mt-[20px]">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              className="object-cover rounded-[12px]"
              alt="Instagram"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FollowOnInstagram;
