import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../redux";
import { logout } from "../../redux/reducers/authThunkCreators";

const OrdersPage = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const logoutHander = () => {
    dispatch(logout());
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
