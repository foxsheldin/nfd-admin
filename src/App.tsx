import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import "./assets/scss/global.scss";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <Routes>
      <Route index element={<AuthPage />} />
      <Route path="admin" element={<AuthPage />} />
      <Route path="admin-panel" element={<Outlet />}>
        <Route path="orders" element={<OrdersPage />} />
        <Route path="*" element={"Error 404"} />
      </Route>
    </Routes>
  );
}

export default App;
