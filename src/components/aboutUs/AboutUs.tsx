import GenerateBreadCrumbs from "../../helpers/GenerateBreadCrumbs.tsx";
import MegaNewsInformation from "./megaNewsInformation/MegaNewsInformation";
import MegaNewsTeam from "./megaNewsTeam/MegaNewsTeam";
import VideoSection from "./VideoSection/VideoSection";

const AboutUs = () => {
  return (
    <>
      <div className="container max-w-container mx-auto">
        <GenerateBreadCrumbs
          values={[
            {
              value: "home",
              link: "/",
            },
            {
              value: "about us",
              link: "/about-us",
            },
          ]}
          current="about us"
        />
      </div>
      <VideoSection />
      <MegaNewsInformation />
      <MegaNewsTeam />
    </>
  );
};

export default AboutUs;
