import { AxiosBasicCredentials } from "axios";
import React, { useCallback, useState } from "react";
import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../api/api";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { useAppDispatch } from "../../redux";
import { setAuthData } from "../../redux/reducers/authSlice";
import "./styles.scss";

const required = (value: string) => (value ? undefined : "Заполните поле");
const minLength6 = (value: string) =>
  value.length > 5 ? undefined : "Пароль должен быть не менее 6 символов";
const composeValidators =
  (...validators: any) =>
  (value: any) =>
    validators.reduce(
      (error: any, validator: any) => error || validator(value),
      undefined
    );

const AuthPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errorServerMessage, setErrorServerMessage] = useState<string>("");

  const onFormSubmit = useCallback(
    (data: AxiosBasicCredentials) => {
      authAPI
        .login(data)
        .then((response) => {
          setErrorServerMessage("");
          localStorage.setItem("accessToken", response.data.access_token);
          localStorage.setItem("refreshToken", response.data.refresh_token);
          localStorage.setItem("tokenExpires", response.data.expires_in);
          dispatch(setAuthData());
          navigate("/admin-panel/orders");
        })
        .catch((response) => {
          if (response.response.status === 401) {
            console.log(response);
            setErrorServerMessage("Неправильный логин или пароль");
          } else {
            setErrorServerMessage("Ошибка сервера " + response.response.status);
          }
        });
    },
    [errorServerMessage]
  );

  return (
    <div className="admin-page">
      <div className="authorization">
        <div className="authorization__header">
          <LogoIcon />
          Need for drive
        </div>
        <Form
          onSubmit={onFormSubmit}
          render={({ handleSubmit, submitting }) => (
            <form
              className="authorization__form auth-form"
              onSubmit={handleSubmit}
            >
              <div className="auth-form__header">Вход</div>
              <div className="auth-form__fields">
                <Field name="username" validate={required}>
                  {({ input, meta }) => (
                    <div className="field-form">
                      <label htmlFor="username" className="label">
                        Почта
                      </label>
                      <input
                        {...input}
                        type="text"
                        id="username"
                        className={
                          meta.error && meta.touched
                            ? "input input_error"
                            : "input"
                        }
                        placeholder="Почта"
                      />
                      {meta.error && meta.touched && (
                        <div className="error-message">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Field
                  name="password"
                  validate={composeValidators(required, minLength6)}
                >
                  {({ input, meta }) => (
                    <div className="field-form">
                      <label htmlFor="password" className="label">
                        Пароль
                      </label>
                      <input
                        {...input}
                        type="password"
                        id="password"
                        className={
                          meta.error && meta.touched
                            ? "input input_error"
                            : "input"
                        }
                        placeholder="Пароль"
                      />
                      {meta.error && meta.touched && (
                        <div className="error-message">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div className="auth-form__actions actions">
                <a href="#" className="link">
                  Запросить доступ
                </a>
                <button type="submit" className="button" disabled={submitting}>
                  Войти
                </button>
              </div>
              <div
                className="error-message"
                style={{ textAlign: "center", width: "90%" }}
              >
                {errorServerMessage}
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default AuthPage;
