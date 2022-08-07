import React, { ChangeEvent, useState } from "react";
import "./styles.scss";
import plugImage from "../../assets/images/car.png";
import ProgressBar from "@ramonak/react-progress-bar";
import Checkbox from "../../components/Checkbox/Checkbox";

const CarSettingPage = () => {
  const [filenamePhoto, setFilenamePhoto] = useState<string | null>(null);

  const handleChangePhoto = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.files);
    if (evt.target.files?.length) {
      const file = evt.target.files[0];
      setFilenamePhoto(file.name);
    } else {
      setFilenamePhoto(null);
    }
  };

  return (
    <div className="bg-content">
      <div className="main-wrapper car-setting-page">
        <div className="page-title">Карточка автомобиля</div>
        <div className="group-card">
          <div className="card card__left">
            <div className="card__top short-info">
              <img
                className="short-info__car-image"
                alt="Автомобиль"
                crossOrigin="anonymous"
                referrerPolicy="origin"
                src={plugImage}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = plugImage;
                }}
                width="244"
                height="110"
              />
              <div className="short-info__name">Hyndai, i30</div>
              <div className="short-info__category">Компакт-кар</div>
              <div className="select-file-input">
                <div className="select-file-input__filename">
                  {filenamePhoto ?? "Выберите файл..."}
                </div>
                <label
                  htmlFor="file-input"
                  className="select-file-input__browse"
                >
                  Обзор
                </label>
                <input
                  type="file"
                  id="file-input"
                  className="input_file"
                  accept="image/png, image/jpeg"
                  onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                    handleChangePhoto(evt)
                  }
                />
              </div>
            </div>
            <div className="progressbar">
              <div className="progressbar__header">
                <div className="progressbar__title">Заполнено</div>
                <div className="progressbar__percent">70%</div>
              </div>
              <ProgressBar
                completed={70}
                customLabel="&nbsp;"
                barContainerClassName="progressbar-container"
                labelClassName="progressbar-label"
                height="5px"
              />
            </div>
            <div className="card__bottom description">
              <div className="description__title">Описание</div>
              <div className="description__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                nesciunt, voluptate dolorem cumque cupiditate eaque
                perspiciatis! Ducimus excepturi tempore, odit dolorum voluptate
                beatae harum laudantium, possimus obcaecati repellendus
                exercitationem. Voluptates.
              </div>
            </div>
          </div>

          <div className="card card__right settings-car">
            <div className="settings-car__title">Настройка автомобиля</div>
            <div className="settings-car__form">
              <div className="field-form">
                <label htmlFor="model" className="label">
                  Модель автомобиля
                </label>
                <input type="text" id="model" className="input" />
              </div>
              <div className="field-form">
                <label htmlFor="type-car" className="label">
                  Тип автомобиля
                </label>
                <input type="text" id="type-car" className="input" />
              </div>
              <div className="field-form colors">
                <label htmlFor="colors" className="label">
                  Доступные цвета
                </label>
                <div className="colors__actions">
                  <input type="text" id="colors" className="input" />
                  <button type="button" className="button_plus">
                    +
                  </button>
                </div>
                <div className="checkbox-list">
                  <Checkbox id="blue" textLabel="blue" checked={true} />
                  <Checkbox id="gray" textLabel="gray" checked={true} />
                  <Checkbox id="green" textLabel="green" checked={false} />
                  <Checkbox id="blue" textLabel="blue" checked={true} />
                  <Checkbox id="gray" textLabel="gray" checked={true} />
                  <Checkbox id="green" textLabel="green" checked={false} />
                  <Checkbox id="blue" textLabel="blue" checked={true} />
                  <Checkbox id="gray" textLabel="gray" checked={true} />
                  <Checkbox id="green" textLabel="green" checked={false} />
                </div>
              </div>
            </div>
            <div className="settings-car__actions actions">
              <div className="actions__left-side">
                <button type="submit" className="button">
                  Сохранить
                </button>
                <button className="button button_gray">Отменить</button>
              </div>
              <button className="button button_red">Удалить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSettingPage;
