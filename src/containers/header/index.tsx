import Logo from "../../assets/logo.svg";
import { Phone } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header bg-white px-16 py-4 flex justify-between items-center ">
      <a href="/">
        <img className="w-[120px] lg:w-full" alt="logo" src={Logo} />
      </a>
      <Phone
        className="border border-[#FFBB00] p-[6px] rounded-[4px] shadow-[4px_4px_14px_0px_#0000000F]"
        sx={{ color: "#FFBB00", width: "2rem", height: "2rem" }}
      />
    </div>
  );
};

export default Header;
