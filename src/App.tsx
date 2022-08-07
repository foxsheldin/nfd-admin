import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import "./assets/scss/global.scss";
import CarSettingPage from "./pages/CarSettingPage";
import AdminPanelLayout from "./pages/AdminPanelLayout";
import OrdersPage from "./pages/OrdersPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CarCategoriesPage from "./pages/CarCategoriesPage/CarCategoriesPage";
import RateTypesPage from "./pages/RateTypesPage/RateTypesPage";
import RatePage from "./pages/RatePage/RatePage";
import CarsPage from "./pages/CarsPage/CarsPage";

function App() {
  return (
    <Routes>
      <Route index element={<AuthPage />} />
      <Route path="admin" element={<AuthPage />} />
      <Route path="/admin/*" element={<AuthPage />} />
      <Route path="admin-panel" element={<AdminPanelLayout />}>
        <Route path="car-setting" element={<CarSettingPage />} />
        <Route path="cars" element={<CarsPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="car-categories" element={<CarCategoriesPage />} />
        <Route path="rate-types" element={<RateTypesPage />} />
        <Route path="rate" element={<RatePage />} />
        <Route path="*" element={"Error 404"} />
      </Route>
    </Routes>
  );
}

export default App;
