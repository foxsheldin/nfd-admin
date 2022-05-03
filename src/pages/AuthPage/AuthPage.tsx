import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import "./styles.scss";

const AuthPage = () => {
  return (
    <div className="admin-page">
      <div className="authorization">
        <div className="authorization__header">
          <LogoIcon />
          Need for drive
        </div>
        <div className="authorization__form auth-form">
          <div className="auth-form__header">Вход</div>
          <div className="auth-form__fields">
            <div className="field-form">
              <label htmlFor="email" className="label">
                Почта
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input"
                placeholder="E-mail"
              />
            </div>
            <div className="field-form">
              <label htmlFor="password" className="label">
                Пароль
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input"
                placeholder="Пароль"
              />
            </div>
          </div>
          <div className="auth-form__actions actions">
            <a href="#" className="link">
              Запросить доступ
            </a>
            <button className="button">Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
