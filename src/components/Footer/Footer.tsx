import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-wrapper">
        <div className="links">
          <NavLink to="/" className="link link_none-decoration">
            Главная страница
          </NavLink>
          <a href="#" className="link link_none-decoration">
            Ссылка
          </a>
        </div>
        <div className="coopyright">Copyright © 2020 Simbirsoft</div>
      </div>
    </div>
  );
};

export default Footer;
