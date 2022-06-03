import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosBasicCredentials, AxiosError } from "axios";
import { authAPI } from "../../api/api";
import { setAuthData, setErrorServerMessage, setLogoutData } from "./authSlice";

export const login = createAsyncThunk(
  "auth/login",
  async (loginData: AxiosBasicCredentials, { dispatch }) => {
    dispatch(setErrorServerMessage(null));
    try {
      const response = await authAPI.login(loginData);
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("refreshToken", response.data.refresh_token);
      localStorage.setItem("tokenExpires", response.data.expires_in);
      dispatch(setAuthData());
    } catch (e) {
      const error = e as AxiosError;

      if (error.response?.data === "Unauthorized")
        dispatch(setErrorServerMessage("Неправильный логин или пароль"));
      else dispatch(setErrorServerMessage(error.message));
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    try {
      await authAPI.logout();
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("tokenExpires");
      dispatch(setLogoutData());
    } catch (e) {
      const error = e as AxiosError;
      console.error(error.message);
    }
  }
);
