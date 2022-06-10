import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import "./styles.scss";
import MenuList from "./components/MenuList/MenuList";

const Sidebar = ({
  isOpenMenu,
  setOpenMenu,
}: {
  isOpenMenu: boolean;
  setOpenMenu: (isOpenMenu: boolean) => void;
}) => {
  return (
    <div className={isOpenMenu ? "sidebar open" : "sidebar"}>
      <div className="sidebar__header header">
        <LogoIcon />
        Need for car
      </div>
      <MenuList setOpenMenu={setOpenMenu} />
    </div>
  );
};

export default Sidebar;
