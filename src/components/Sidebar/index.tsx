import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import "./styles.scss";
import MenuList from "./components/MenuList/MenuList";

const Sidebar = ({ isOpenMenu }: { isOpenMenu: boolean }) => {
  return (
    <div className={isOpenMenu ? "sidebar open" : "sidebar"}>
      <div className="sidebar__header header">
        <LogoIcon />
        Need for car
      </div>
      <MenuList />
    </div>
  );
};

export default Sidebar;
