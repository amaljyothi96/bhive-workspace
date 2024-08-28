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
import FeatureTile from "../../components/featureTile";

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
    <section className="lg:px-16 px-4 py-8">
      <section>
        <img
          className="absolute w-3/5 z-0 hidden lg:block"
          src={dashboard1}
          alt="dashboard"
        />
        <div className="flex flex-col lg:grid lg:grid-cols-5 items-center relative z-10">
          <p className="text-primary heading-1 col-span-3 order-2 lg:block hidden text-left">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-[#FFBB00]">₹199/-!</span>
          </p>
          <img
            className="col-span-2 order-1 lg:order-2"
            src={dashboard2}
            alt="co working space"
          />
          <p className="text-primary heading-4 order-2 lg:hidden block text-center mt-4 font-semibold">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-[#FFBB00]">₹199/-!</span>
          </p>
        </div>
      </section>
      <section className="my-24">
        <p className="heading-2 my-8">Why Choose us?</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
          {features.map((item, index) => (
            <div
              key={item.id}
              className={`${
                index === 3 || index === 7 ? "" : "lg:border-r"
              } lg:border-gray-200 ${
                index > 3 && "lg:border-t"
              } rounded-lg lg:rounded-none bg-white lg:bg-transparent shadow-[0px_2px_4px_0px_#0000000F] lg:shadow-none`}
            >
              <FeatureTile data={item} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <p className="heading-2 my-8">Our Space Overview</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8">
          {workspaceData?.map((item) => (
            <DetailsCard data={item} />
          ))}
        </div>
      </section>
      <section className="mt-16">
        <p className="heading-2 mt-8 mb-8 lg:mb-56 text-[#263238] lg:text-[#605F5F]">
          Download our app now
        </p>
        <div className="relative lg:grid grid-cols-5 gap-x-32 bg-white border-[1px] border-[#00000014] rounded-lg shadow-[0px_2px_19px_0px_#00000012] py-12 px-6">
          <div className="absolute hidden lg:block bottom-0 left-10">
            <img src={download} alt="download" />
          </div>
          <div className="col-span-2" />
          <div className="col-span-3">
            <p className="text-[#605F5F] hidden lg:block heading-4 font-normal leading-[28px]">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="lg:hidden flex justify-center block bottom-0 left-10">
              <img src={download} alt="download" />
            </div>
            <div className="flex justify-center gap-x-2 mt-8">
              <img
                className=" cursor-pointer"
                src={playStore}
                alt="playstore"
              />
              <img className=" cursor-pointer" src={appStore} alt="appstore" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
