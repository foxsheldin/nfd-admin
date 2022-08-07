import React, { useEffect, useState } from "react";
import InputAutocomplete from "../../components/InputAutocomplete/InputAutocomplete";
import plugImage from "../../assets/images/car.png";
import "./styles.scss";
import ReactPaginate from "react-paginate";
import { RootState, useAppDispatch } from "../../redux";
import { useSelector } from "react-redux";
import {
  getCars,
  getCategories,
} from "../../redux/reducers/info/infoThunkCreators";
import { setCurrentOffsetCars } from "../../redux/reducers/info/infoSlice";

const CarsPage = () => {
  const dispatch = useAppDispatch();
  const { carsData, categoriesData, currentOffsetCars, limitLoadingCars } =
    useSelector((state: RootState) => state.info);

  const [currentPage, setCurrentPage] = useState<number>(-1);
  const [pageCount, setPageCount] = useState<number>(0);

  useEffect(() => {
    dispatch(getCars({ offset: currentOffsetCars, limit: limitLoadingCars }));

    dispatch(getCategories());
  }, []);

  useEffect(() => {
    handleSetPaginate();
  }, [currentOffsetCars, limitLoadingCars]);

  /* useEffect(() => {
    dispatch(getOrders({ offset: currentOffset, limit: limitLoading }));
  }, [selectedCategoryCars]); */

  const handleSetPaginate = () => {
    setCurrentPage(Math.ceil(currentOffsetCars / limitLoadingCars));
    setPageCount(Math.ceil((carsData?.count as number) / limitLoadingCars));
  };

  const handlePageClick = (evt: any) => {
    const offset = evt.selected * limitLoadingCars;
    dispatch(getCars({ offset, limit: limitLoadingCars }));
    dispatch(setCurrentOffsetCars(offset));
  };

  const handleSetCategory = () => {
    console.log("HandleSetRate");
  };

  return (
    <div className="bg-content">
      <div className="main-wrapper cars-page">
        <div className="page-title">Список авто</div>
        <div className="card">
          <div className="card__top filters">
            <div className="filters__list">
              <InputAutocomplete
                name="rate"
                placeholder="Категория"
                arrayData={
                  categoriesData?.data?.map(
                    (item) => item.name
                  ) as Array<string>
                }
                handleSet={handleSetCategory}
                selectedValue={""}
              />
            </div>
            <div className="filters__action">
              <button className="button button_red">Сбросить</button>
              <button className="button">Применить</button>
            </div>
          </div>
          <div className="cars">
            {carsData?.data?.map((item, index) => (
              <div className="cars__item" key={index}>
                <img
                  className="car-image"
                  alt="Автомобиль"
                  crossOrigin="anonymous"
                  referrerPolicy="origin"
                  src={item.thumbnail?.path}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = plugImage;
                  }}
                  width="138"
                  height="63"
                />
                <div className="name-model">{item?.name}</div>
                <div className="info">
                  <div className="info__category">
                    <span className="text_black">Категория:</span>{" "}
                    {item?.categoryId?.name}
                  </div>
                  <div className="info__price">
                    <span className="text_black">Цена:</span> {item.priceMin}₽ -{" "}
                    {item.priceMax}₽
                  </div>
                  <div className="info__color">
                    <span className="text_black">Цвета:</span>{" "}
                    {item?.colors?.map((color) => color + "; ")}
                  </div>
                </div>
                <div className="description">{item?.description}</div>
                <button className="button">Изменить</button>
              </div>
            ))}
          </div>
          <div className="card__bottom">
            <ReactPaginate
              pageCount={pageCount}
              forcePage={currentPage}
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

export default CarsPage;
