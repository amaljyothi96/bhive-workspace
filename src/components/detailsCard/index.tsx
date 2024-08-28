import {
  KeyboardDoubleArrowRightOutlined,
  NearMeOutlined,
} from "@mui/icons-material";
import { WorkspaceCardData } from "../../types";

const DetailsCard = ({ data }: { data: WorkspaceCardData }) => {
  return (
    <div className="p-4 bg-white border-[1px] border-[#EEE7E7CC] rounded-lg shadow-[0px_1px_9px_0px_#0000000F]">
      <div className="grid grid-cols-5 justify-between gap-x-2 items-center">
        <p className="col-span-4 heading-4">{data.name}</p>
        <div className="col-span-1 w-[52px] h-[52px] bg-[#F9F9F9] border-[0.5px] border-[#EEE7E7] rounded-lg flex justify-center items-center cursor-pointer">
          <NearMeOutlined fontSize="small" />
        </div>
      </div>
      <img
        className="w-full h-auto lg:h-[250px] rounded-lg my-4"
        src={data.image}
        alt="working-space"
      />
      <div className="grid grid-cols-2 gap-x-4">
        <div className="flex justify-between items-center bg-[#F9F9F9] border-[0.5px] border-[#EEE7E7] rounded-lg p-2 cursor-pointer">
          <div>
            <p className="text-[#65624C] text-[14px]">Day Pass</p>
            <p className="text-primary heading-4">
              ₹ {data.day_pass_price}
              <span className="text-[#263238CC] text-[12px] font-medium">
                /Day
              </span>
            </p>
          </div>
          <KeyboardDoubleArrowRightOutlined />
        </div>
        <div className="flex justify-between items-center bg-[#FFCF4B] border-[0.5px] border-[#FFC422] rounded-lg p-2 cursor-pointer">
          <div>
            <p className="text-[#514D2D] text-[14px]">Bulk Pass</p>
            <p className="text-primary heading-4">
              ₹ 2400
              <span className="text-[#263238CC] text-[12px] font-medium">
                /10 Days
              </span>
            </p>
          </div>
          <KeyboardDoubleArrowRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
