import { TeamCardProps } from "../../../types/megaNewsTeam/MegeNewsTeamCard";

const MegaNewsTeamCard = ({ team }: TeamCardProps) => {
  // Render MegaNewsTeamCard component with team data

  return (
    <>
      <div className="bg-[#fff] rounded-[12px] pt-[24px] shadow-lg pb-[10px] flex flex-col gap-[25px]">
        <div className="image__wrapper size-[124px] mx-auto">
          <img
            className="object-contain rounded-[20px] w-full h-full mx-auto"
            src={team.image}
            alt={team.name}
          />
        </div>
        <div className="mx-[10px] text-center flex flex-col gap-[25px]">
          <p className="capitalize">{team.position}</p>
          <div className="bg-[#F5F5F5] py-[10px] rounded-[12px] font-medium text-[16px] text-[#3E3232] capitalize">
            <p>{team.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaNewsTeamCard;
