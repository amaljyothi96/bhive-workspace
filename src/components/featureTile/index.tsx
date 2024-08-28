import { Feature } from "../../types";

const FeatureTile = ({ data }: { data: Feature }) => {
  const Icon = data?.icon;
  return (
    <div className="col-span-1 flex flex-col lg:flex-row gap-y-2 items-center p-6">
      <Icon sx={{ fontSize: "30px", marginRight: 1, color: "#FFBB00" }} />
      <div className="heading-5 font-medium">{data?.feature}</div>
    </div>
  );
};

export default FeatureTile;
