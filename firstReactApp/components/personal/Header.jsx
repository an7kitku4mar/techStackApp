import iafLogo from "/src/assets/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGlobe,
  faLanguage,
  faRightLeft,
  faTextHeight,
  faHome,
  faInfoCircle,
  faGraduationCap,
  faImagePortrait,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

      
const Header = ({ openLogin }) => {
  const navStyle = ({ isActive }) =>
    isActive
      ? "nav-btn-active flex items-center gap-2 px-4 py-2"
      : "flex items-center gap-2 px-4 py-2 text-white hover:text-amber-900 transition";

  return (
    <>
      {/* TOP HEADER */}
      <div className="bg-blue-400 text-white shadow-md">
        <div className="h-2 bg-gradient-to-r from-orange-600 via-white to-green-600"></div>
      </div>
    </>
  );
};

export default Header;