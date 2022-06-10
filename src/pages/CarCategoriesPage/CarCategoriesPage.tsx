import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux";
import { getCategories } from "../../redux/reducers/info/infoThunkCreators";
import "./styles.scss";

const CarCategoriesPage = () => {
  const dispatch = useAppDispatch();
  const { categoriesData } = useSelector((state: RootState) => state.info);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="bg-content">
      <div className="main-wrapper categories-page">
        <div className="page-title">Список категорий</div>
        <div className="card">
          <div className="card__top">
            <button className="button">Добавить</button>
          </div>
          <div className="categories">
            <div className="categories__header text_bold">
              <div className="name">Название</div>
              <div className="description">Описание</div>
            </div>
            <div className="categories__list">
              {categoriesData?.data?.map((item, index) => (
                <div className="categories__item" key={index}>
                  <div className="name">{item?.name}</div>
                  <div className="description">{item?.description}</div>
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

export default CarCategoriesPage;
