import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux";
import plugImage from "../../../../assets/images/car.png";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import { ReactComponent as ButtonDoneIcon } from "../../../../assets/icons/button-done.svg";
import { ReactComponent as ButtonCancelIcon } from "../../../../assets/icons/button-cancel.svg";
import { ReactComponent as ButtonChangeIcon } from "../../../../assets/icons/button-change.svg";
import "./styles.scss";

const OrderList = () => {
  const { ordersData } = useSelector((state: RootState) => state.orders);

  return (
    <div className="orders">
      {ordersData?.data?.map((item, index) => (
        <div className="orders__item" key={index}>
          <img
            className="car-image"
            alt="Автомобиль"
            crossOrigin="anonymous"
            referrerPolicy="origin"
            src={item.carId?.thumbnail?.path}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = plugImage;
            }}
            width="138"
            height="63"
          />
          <div className="info">
            <div className="info__car-location">
              <span className="text_black">{item.carId?.name}</span> в{" "}
              <span className="text_black">{item.cityId?.name}</span>,{" "}
              {item.pointId?.address}
            </div>
            <div className="info__datetime">
              {new Date(item?.dateFrom as number)
                .toLocaleString()
                .replace(/,/g, "")
                .slice(0, 16)}{" "}
              —{" "}
              {new Date(item?.dateTo as number)
                .toLocaleString()
                .replace(/,/g, "")
                .slice(0, 16)}
            </div>
            <div className="info__color">
              Цвет: <span className="text_black">{item?.color}</span>
            </div>
            <div className="info__status">
              Статус:{" "}
              <span className="text_black">{item.orderStatusId?.name}</span>
            </div>
          </div>
          <ul className="checkbox-list additionally">
            <Checkbox
              id="fullTank"
              checked={item.isFullTank as boolean}
              textLabel={"Полный бак"}
              onChange={() => null}
            />
            <Checkbox
              id="needChildChair"
              checked={item.isNeedChildChair as boolean}
              textLabel={"Детское кресло"}
              onChange={() => null}
            />
            <Checkbox
              id="rightWheel"
              checked={item.isRightWheel as boolean}
              textLabel={"Правый руль"}
              onChange={() => null}
            />
          </ul>
          <div className="amount-money">{item?.price} ₽</div>
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
      ))}
    </div>
  );
};

export default OrderList;
