import { useEffect } from "react";
import dashboard1 from "../../assets/dashboard-1.svg";
import dashboard2 from "../../assets/dashboard-2.svg";
import playStore from "../../assets/play-store.svg";
import appStore from "../../assets/app-store.svg";
import download from "../../assets/download.svg";
import { features } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { getWorkspaceList } from "../../redux/actions/listActions";
import { RootState, WorkspaceCardData } from "../../types";
import DetailsCard from "../../components/detailsCard";

const imageBaseUrl =
  "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main";

const Dashboard = () => {
  const dispatch = useDispatch();
  const workspaceList = useSelector(
    (state: RootState) => state.listReducer.workspaceList
  );

  const workspaceData: Array<WorkspaceCardData> | undefined =
    workspaceList?.map((space) => {
      return {
        id: space.id,
        name: space.name,
        latitude: space.latitude,
        longitude: space.longitude,
        image: `${imageBaseUrl}/${space.images[0]}`,
        day_pass_price: space.day_pass_price,
      };
    });

  useEffect(() => {
    dispatch(getWorkspaceList());
  }, []);

  return (
    <section className="px-16 py-8">
      <section>
        <img className="absolute w-3/5 z-0" src={dashboard1} alt="dashboard" />
        <div className="grid grid-cols-5 items-center relative z-10">
          <p className="text-primary heading-1 col-span-3">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-[#FFBB00]">₹199/-!</span>
          </p>
          <img className="col-span-2" src={dashboard2} alt="co working space" />
        </div>
      </section>
      <section className="my-24">
        <p className="heading-2 my-8">Why Choose us?</p>
        <div className="grid grid-cols-4 gap-x-8 gap-y-8">
          {features.map((item) => {
            const Icon = item?.icon;
            return (
              <div className="col-span-1 flex items-center" key={item.id}>
                <Icon
                  sx={{ fontSize: "30px", marginRight: 1, color: "#FFBB00" }}
                />
                <div className="heading-5 font-medium">{item?.feature}</div>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <p className="heading-2 my-8">Our Space Overview</p>
        <div className="grid grid-cols-3 gap-x-8 gap-y-8">
          {workspaceData?.map((item) => (
            <DetailsCard data={item} />
          ))}
        </div>
      </section>
      <section className="mt-16">
        <p className="heading-2 mt-8 mb-56 text-[#605F5F]">
          Download our app now
        </p>
        <div className="relative grid grid-cols-5 gap-x-32 bg-white border-[1px] border-[#00000014] rounded-lg shadow-[0px_2px_19px_0px_#00000012] py-12 px-6">
          <div className="absolute bottom-0 left-10">
            <img src={download} alt="download" />
          </div>
          <div className="col-span-2" />
          <div className="col-span-3">
            <p className="text-[#605F5F] heading-4 font-normal leading-[28px]">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="flex gap-x-2 mt-8">
              <img src={playStore} alt="playstore" />
              <img src={appStore} alt="appstore" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
