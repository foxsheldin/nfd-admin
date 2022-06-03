import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authAPI } from "../../api/api";
import { useAppDispatch } from "../../redux";
import { setLogoutData } from "../../redux/reducers/authSlice";

const OrdersPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logoutHander = () => {
    authAPI.logout();
    dispatch(setLogoutData());
    navigate("/");
  };

  return (
    <div>
      OrdersPage
      <button className="button" onClick={logoutHander}>
        Выйти
      </button>
    </div>
  );
};

export default OrdersPage;
