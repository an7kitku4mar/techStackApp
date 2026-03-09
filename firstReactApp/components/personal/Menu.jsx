import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFileInvoiceDollar,
  faMoneyBill,
  faUniversity,
  faChartBar,
  faClipboardList,
  faFileAlt,
  faQuestionCircle
}  from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  FaUser: faUser,
  FaFileInvoiceDollar: faFileInvoiceDollar,
  FaMoneyCheckAlt: faMoneyBill,
  FaUniversity: faUniversity,
  FaChartBar: faChartBar,
  FaClipboardList: faClipboardList,
  FaFileAlt: faFileAlt,
  FaQuestionCircle: faQuestionCircle
};

export default function Sidebar() {

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {

    axios.get("/api/personal/menu")
      .then(res => {

        // show all menus
        setMenuItems(res.data);

      })
      .catch(err => console.error(err));

  }, []);

  return (

    <div className="flex">

      <div className="w-60 bg-slate-900 text-white p-5" style={{
        height:"100vh",
      }}>

        <h2 className="text-xl p-1 text-gray-300">Personal Portal</h2>
        <hr className="p-2"/>
        <ul style={{listStyle:"none", padding:0}}>

          {menuItems.map(menu => {

            const icon = iconMap[menu.ICON_NAME] || faFileAlt;

            return (
              <li
                key={menu.MENU_ID}
                className="cursor-pointer p-2 py-4 rounded hover:bg-white hover:text-black"
              >

                <FontAwesomeIcon
                  icon={icon}
                  style={{marginRight:"10px"}}
                />

                <Link to={menu.ROUTE} >{menu.MENU_NAME}</Link>

              </li>
            );

          })}

        </ul>

      </div>

    </div>
  );
}