import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/MainHeader";
import Sidebar from "../../components/Sidebar";
import "./styles.scss";

const AdminPanelLayout = () => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="admin-panel-layout">
      <Sidebar isOpenMenu={isOpenMenu} setOpenMenu={setOpenMenu} />
      <div className="panel">
        <MainHeader isOpenMenu={isOpenMenu} setOpenMenu={setOpenMenu} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AdminPanelLayout;
