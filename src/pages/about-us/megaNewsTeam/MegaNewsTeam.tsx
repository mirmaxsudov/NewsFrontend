import Person1 from "../../../assets/images/megaNewsTeam/Person1.png";
import Person2 from "../../../assets/images/megaNewsTeam/Person2.png";
import Person3 from "../../../assets/images/megaNewsTeam/Person3.png";
import Person4 from "../../../assets/images/megaNewsTeam/Person4.png";
import Person5 from "../../../assets/images/megaNewsTeam/Person5.png";
import Person6 from "../../../assets/images/megaNewsTeam/Person6.png";
import { TeamType } from "../../../types/megaNewsTeam/Team.ts";
import { v4 as uuid } from "uuid";
import MegaNewsTeamCard from "./MegaNewsTeamCard.tsx";

const MegaNewsTeam = () => {
  const TEAM: TeamType[] = [
    {
      id: uuid(),
      image: Person1,
      name: "behzad pashaei",
      position: "designer",
    },
    {
      id: uuid(),
      image: Person2,
      name: "Cassie Evans",
      position: "programmer",
    },
    {
      id: uuid(),
      image: Person3,
      name: "Louis Hoebregts",
      position: "Marketing",
    },
    {
      id: uuid(),
      image: Person4,
      name: "Patricia",
      position: "administrative",
    },
    {
      id: uuid(),
      image: Person5,
      name: "James Hoebregts",
      position: "CEO",
    },
    {
      id: uuid(),
      image: Person6,
      name: "Jon Kantner",
      position: "Financial",
    },
  ];

  return (
    <>
      <div className="container max-w-container mx-auto">
        <div className="mega-news-team my-[50px]">
          <h3 className="red-line text-[20px] font-medium text-[#3E3232] capitalize mb-[30px]">
            Mega News team
          </h3>
          <div className="flex justify-center flex-wrap lg:flex-nowrap gap-[24px] mb-[100px] sm:mb-0">
            {TEAM.map((team) => (
              <div className="w-[230px]">
                <MegaNewsTeamCard team={team} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaNewsTeam;
