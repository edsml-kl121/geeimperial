
//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./index.css";


const Header = (props) => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true);
    const location = useLocation();

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? " K" : "Kandanai"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
                ) : (
                  <FiArrowLeftCircle/>
                  )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
                  <MenuItem active={location.pathname === "/"} icon={<FiHome />}>
                    Home
                  <NavLink to = "/" />
                  </MenuItem>
                {/* <NavLink to ="test"> */}
                  <MenuItem active={location.pathname === "/projects"} icon={<FaList />}>
                    Projects
                    <NavLink to = "/projects" />
                  </MenuItem>
                {/* </NavLink> */}
                  <MenuItem active = {location.pathname === "/contact"} icon={<FaRegHeart />}>
                    Contact
                    <NavLink to = "/contact" />
                  </MenuItem>
                  {/* <MenuItem active = {location.pathname === "/login"} icon={<FaRegHeart />}>
                    Login
                    <NavLink to = "/login" />
                  </MenuItem> */}
                  <MenuItem active = {location.pathname === "/register"} icon={<FaRegHeart />}>
                    Register
                    <NavLink to = "/register" />
                  </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              {console.log("p", props.props)}
              <MenuItem icon={<FiLogOut />} onClick={props.props}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
