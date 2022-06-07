import React from "react";
import InputAutocomplete from "../../components/InputAutocomplete/InputAutocomplete";
import carImage from "../../assets/images/car.png";
import "./styles.scss";
import Checkbox from "../../components/Checkbox/Checkbox";
import { ReactComponent as ButtonDoneIcon } from "../../assets/icons/button-done.svg";
import { ReactComponent as ButtonCancelIcon } from "../../assets/icons/button-cancel.svg";
import { ReactComponent as ButtonChangeIcon } from "../../assets/icons/button-change.svg";
import ReactPaginate from "react-paginate";

const OrdersPage = () => {
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
  const handleChangeStatusCheckbox = () => {
    console.log("Change status Checkbox");
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
                arrayData={["string2", "string1"]}
                handleSet={handleSetRate}
                selectedValue={""}
              />
              <InputAutocomplete
                name="car"
                placeholder="Автомобиль"
                arrayData={["string1", "string2"]}
                handleSet={handleSetCar}
                selectedValue={""}
              />
              <InputAutocomplete
                name="city"
                placeholder="Город"
                arrayData={["string1", "string2"]}
                handleSet={handleSetCity}
                selectedValue={""}
              />
              <InputAutocomplete
                name="status"
                placeholder="Статус"
                arrayData={["string1", "string2"]}
                handleSet={handleSetStatus}
                selectedValue={""}
              />
            </div>
            <div className="filters__action">
              <button className="button">Применить</button>
            </div>
          </div>
          <div className="orders">
            <div className="orders__item">
              <img src={carImage} className="car-image" alt="Автомобиль " />
              <div className="info">
                <div className="info__car-location">
                  <span className="text_black">Elantra</span> в{" "}
                  <span className="text_black">Ульяновск</span>, Нариманова 42
                </div>
                <div className="info__datetime">
                  12.06.2019 12:00 — 13.06.2019 12:00
                </div>
                <div className="info__color">
                  Цвет: <span className="text_black">Голубой</span>
                </div>
              </div>
              <ul className="checkbox-list additionally">
                <Checkbox
                  id="1-fullTank"
                  checked={true}
                  onChange={handleChangeStatusCheckbox}
                  textLabel={"Полный бак"}
                />
                <Checkbox
                  id="1-needChildChair"
                  checked={true}
                  onChange={handleChangeStatusCheckbox}
                  textLabel={"Детское кресло"}
                />
                <Checkbox
                  id="1-rightWheel"
                  checked={false}
                  onChange={handleChangeStatusCheckbox}
                  textLabel={"Правый руль"}
                />
              </ul>
              <div className="amount-money">1 004 300 ₽</div>
              <div className="group-button">
                <button className="button button_orders button_done">
                  <ButtonDoneIcon />
                  Готово
                </button>
                <button className="button button_orders button_cancel">
                  <ButtonCancelIcon />
                  Отмена
                </button>
                <button className="button button_orders button_change">
                  <ButtonChangeIcon />
                  Изменить
                </button>
              </div>
            </div>
          </div>
          <div className="card__bottom">
            <ReactPaginate
              pageCount={100}
              forcePage={4}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
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
