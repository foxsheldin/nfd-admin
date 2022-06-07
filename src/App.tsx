import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import "./assets/scss/global.scss";
import AdminPanelLayout from "./pages/AdminPanelLayout";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <Routes>
      <Route index element={<AuthPage />} />
      <Route path="admin" element={<AuthPage />} />
      <Route path="admin-panel" element={<AdminPanelLayout />}>
        <Route path="orders" element={<OrdersPage />} />
        <Route path="*" element={"Error 404"} />
      </Route>
    </Routes>
  );
}

export default App;
