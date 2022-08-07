import React, { useEffect, useState } from "react";
import InputAutocomplete from "../../components/InputAutocomplete/InputAutocomplete";
import "./styles.scss";
import ReactPaginate from "react-paginate";
import { getOrders } from "../../redux/reducers/orders/ordersThunkCreators";
import { RootState, useAppDispatch } from "../../redux";
import { useSelector } from "react-redux";
import OrderList from "./components/OrderList/OrderList";
import { setCurrentOffset } from "../../redux/reducers/orders/ordersSlice";
import {
  getCars,
  getCities,
  getOrderStatus,
  getRate,
} from "../../redux/reducers/info/infoThunkCreators";

const OrdersPage = () => {
  const dispatch = useAppDispatch();
  const { countOrders, currentOffset, limitLoading } = useSelector(
    (state: RootState) => state.orders
  );
  const { rateData, carsData, citiesData, orderStatusData } = useSelector(
    (state: RootState) => state.info
  );

  const [currentPage, setCurrentPage] = useState<number>(-1);
  const [pageCount, setPageCount] = useState<number>(0);

  useEffect(() => {
    dispatch(getOrders({ offset: currentOffset, limit: limitLoading }));

    dispatch(getRate());
    dispatch(getCars({}));
    dispatch(getCities());
    dispatch(getOrderStatus());
  }, []);

  useEffect(() => {
    handleSetPaginate();
  }, [currentOffset, limitLoading]);

  /* useEffect(() => {
    dispatch(getOrders({ offset: currentOffset, limit: limitLoading }));
  }, [selectedCategoryCars]); */

  const handleSetPaginate = () => {
    setCurrentPage(Math.ceil(currentOffset / limitLoading));
    setPageCount(Math.ceil((countOrders as number) / limitLoading));
  };

  const handlePageClick = (evt: any) => {
    const offset = evt.selected * limitLoading;
    dispatch(getOrders({ offset, limit: limitLoading }));
    dispatch(setCurrentOffset(offset));
  };

  const handleSetRate = () => {
    console.log("HandleSetRate");
  };
  const handleSetCar = () => {
    console.log("HandleSetCar");
  };
  const handleSetCity = () => {
    console.log("HandleSetCity");
  };
  const handleSetStatus = () => {
    console.log("HandleSetStatus");
  };

  return (
    <div className="bg-content">
      <div className="main-wrapper orders-page">
        <div className="page-title">Заказы</div>
        <div className="card">
          <div className="card__top filters">
            <div className="filters__list">
              <InputAutocomplete
                name="rate"
                placeholder="Тариф"
                arrayData={
                  rateData?.data?.map(
                    (item) => item?.rateTypeId?.name
                  ) as Array<string>
                }
                handleSet={handleSetRate}
                selectedValue={""}
              />
              <InputAutocomplete
                name="car"
                placeholder="Автомобиль"
                arrayData={
                  carsData?.data?.map((item) => item.name) as Array<string>
                }
                handleSet={handleSetCar}
                selectedValue={""}
              />
              <InputAutocomplete
                name="city"
                placeholder="Город"
                arrayData={
                  citiesData?.data?.map((item) => item.name) as Array<string>
                }
                handleSet={handleSetCity}
                selectedValue={""}
              />
              <InputAutocomplete
                name="status"
                placeholder="Статус"
                arrayData={
                  orderStatusData?.data?.map(
                    (item) => item.name
                  ) as Array<string>
                }
                handleSet={handleSetStatus}
                selectedValue={""}
              />
            </div>
            <div className="filters__action">
              <button className="button button_red">Сбросить</button>
              <button className="button">Применить</button>
            </div>
          </div>

          <OrderList />

          <div className="card__bottom">
            <ReactPaginate
              forcePage={currentPage}
              pageCount={pageCount}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              onPageChange={handlePageClick}
              className="paginate"
              nextLabel="»"
              previousLabel="«"
              activeLinkClassName="paginate__active"
              pageClassName="paginate__page"
              previousClassName="paginate__prev-page"
              nextLinkClassName="paginate__next-page"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
