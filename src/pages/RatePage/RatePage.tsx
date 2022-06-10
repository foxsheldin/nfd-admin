import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux";
import { getRate } from "../../redux/reducers/info/infoThunkCreators";
import "./styles.scss";

const RatePage = () => {
  const dispatch = useAppDispatch();
  const { rateData } = useSelector((state: RootState) => state.info);

  useEffect(() => {
    dispatch(getRate());
  }, []);

  return (
    <div className="bg-content">
      <div className="main-wrapper rate-page">
        <div className="page-title">Список тарифов</div>
        <div className="card">
          <div className="card__top">
            <button className="button">Добавить</button>
          </div>
          <div className="rate">
            <div className="rate__header text_bold">
              <div className="name">Название</div>
              <div className="period">Период</div>
              <div className="price">Цена</div>
            </div>
            <div className="rate__list">
              {rateData?.data?.map((item, index) => (
                <div className="rate__item" key={index}>
                  <div className="name">{item?.rateTypeId?.name}</div>
                  <div className="period">{item?.rateTypeId?.unit}</div>
                  <div className="price">{item.price}₽</div>
                  <button className="action button">Изменить</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatePage;
