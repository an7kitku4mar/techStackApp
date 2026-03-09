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

        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src={iafLogo}
              alt="Logo"
              className="w-28 h-28 rounded-lg"
            />

            <div className="flex-1 border rounded-lg p-4 w-full">
              {/* ICON ROW */}
              <div className="flex justify-end gap-5 text-lg mb-2">
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faGlobe} />
                <FontAwesomeIcon icon={faLanguage} />
                <FontAwesomeIcon icon={faRightLeft} />
                <FontAwesomeIcon icon={faTextHeight} />
              </div>

              <div className="font-bold text-xl md:text-3xl text-center sm:text-left">
                Air Force Central Accounts Office
              </div>

              <div className="text-sm mt-1 text-center sm:text-left">
                Advancing Research Through Smart Digital Solutions...
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-slate-900 border-t border-gray-600">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4 py-3 font-semibold">

          <NavLink to="/" className={navStyle}>
            <FontAwesomeIcon icon={faHome} />
            Home
          </NavLink>

          <div className="relative group">
              <div className="flex items-center gap-2 px-4 py-2 text-white cursor-pointer hover:text-amber-400">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  About Us
              </div>
              
              <div className="absolute left-0 top-full w-56 bg-slate-800 text-black rounded-md shadow-lg 
                              opacity-0 invisible group-hover:opacity-100 
                              group-hover:visible transition-all duration-500 ease-in-out">

                  <NavLink to="/about" className="block hover:text-white hover:bg-gray-900 hover:rounded px-4 py-2">
                  <FontAwesomeIcon icon={faInfoCircle} />
                   &nbsp; About AFCAO
                  </NavLink>

                  <NavLink to="/about" className="block hover:text-white hover:bg-gray-900 hover:rounded px-4 py-2">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  &nbsp; About AOC, AFCAO
                  </NavLink>

                  <div className="relative group">
                      <div className="flex item-center gap-2 px-4 py-2 text-white cursor-pointer">
                          <FontAwesomeIcon icon={faInfoCircle} />
                          About Wings
                      </div>
                      <div className="absolute left-full top-0 w-56 bg-slate-800 text-black rounded-md shadow-lg 
                              opacity-0 invisible subGgroup-hover:opacity-100 
                              group-hover:visible transition-all duration-500 ease-in-out">

                                              <NavLink to=  "/about" className="block hover:text-white hover:bg-gray-900 hover:rounded px-4 py-2">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  &nbsp; About Wings
                  </NavLink>
                      </div>

                  </div>
              </div>
          </div>

          <div className="relative group">
              <div className="flex items-center gap-2 px-4 py-2 text-white cursor-pointer hover:text-amber-400">
                  <FontAwesomeIcon icon={faCogs} />
                  Services & Utilities
              </div>
              
              <div className="absolute left-0 top-full w-56 bg-slate-800  text-black rounded-md shadow-lg 
                              opacity-0 invisible group-hover:opacity-100 
                              group-hover:visible transition-all duration-500 ease-in-out">

                  <NavLink to="/services/pay" className="block hover:text-white hover:bg-gray-900 hover:rounded px-4 py-2">
                  <FontAwesomeIcon icon={faCogs} />
                   &nbsp; Pay Services
                  </NavLink>

                  <NavLink to="/services/pension" className="block hover:text-white hover:bg-gray-900 hover:rounded px-4 py-2">
                  <FontAwesomeIcon icon={faCogs} />
                  &nbsp; Pension Services
                  </NavLink>

                  <NavLink to="/services/grievance" className="block hover:text-white hover:bg-gray-900 hover:rounded px-4 py-2">
                  <FontAwesomeIcon icon={faCogs} />
                  &nbsp; Grievance Portal
                  </NavLink>
              </div>
          </div>

          <div className="relative group">
                <div className="flex item-center gap-2 px-4 py-2 text-white cursor-pointer hover:text-amber-400">
                    <FontAwesomeIcon icon={faImagePortrait} />
                    Gallery
                </div>
                <div className="absolute left-0 top-full w-56 bg-slate-800  text-black rounded-md shadow-lg opacity-0 invisibile group-hover:opacity-100 
                                group-hover:visible transition-all duration-500 ease-in-out">
                    <NavLink to="/gallery" className="block hover:bg-gray-900 hover:rounded px-4 py-2">
                    <FontAwesomeIcon icon={faImagePortrait} />
                    &nbsp; 2026
                    </NavLink>                  
                    <NavLink to="/gallery" className="block hover:text-white hover:bg-gray-900 hover:rounded px-4 py-2">
                    <FontAwesomeIcon icon={faImagePortrait} />
                    &nbsp; 2025
                    </NavLink>                  
                    <NavLink to="/gallery" className="block hover:text-white  hover:rounded px-4 py-2">
                    <FontAwesomeIcon icon={faImagePortrait} />
                    &nbsp; 2024
                    </NavLink>                  
                </div>
          </div>

          <NavLink to="/functionalities" className={navStyle}>
            <FontAwesomeIcon icon={faGraduationCap} />
            Functionalities
          </NavLink>

          <NavLink to="/internalServices" className={navStyle}>
            <FontAwesomeIcon icon={faCogs} />
            AFCAO Internal Services
          </NavLink>

          <button
            onClick={openLogin}
            className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 transition"
          >
            Login
          </button>

        </div>
      </nav>
    </>
  );
};

export default Header;