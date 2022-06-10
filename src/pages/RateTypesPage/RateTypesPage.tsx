import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux";
import { getRateType } from "../../redux/reducers/info/infoThunkCreators";
import "./styles.scss";

const RateTypesPage = () => {
  const dispatch = useAppDispatch();
  const { rateTypeData } = useSelector((state: RootState) => state.info);

  useEffect(() => {
    dispatch(getRateType());
  }, []);

  return (
    <div className="bg-content">
      <div className="main-wrapper rate-types-page">
        <div className="page-title">Типы тарифов</div>
        <div className="card">
          <div className="card__top">
            <button className="button">Добавить</button>
          </div>
          <div className="rate-types">
            <div className="rate-types__header text_bold">
              <div className="name">Название</div>
              <div className="duration">Длительность</div>
            </div>
            <div className="rate-types__list">
              {rateTypeData?.data?.map((item, index) => (
                <div className="rate-types__item" key={index}>
                  <div className="name">{item?.name}</div>
                  <div className="duration">{item?.unit}</div>
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

export default RateTypesPage;
