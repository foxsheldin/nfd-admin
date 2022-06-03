import { authAPI } from "../../api/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosBasicCredentials, AxiosError } from "axios";

export interface IAuthInitialState {
  username: string | null;
  password: string | null;
  refresh_token: string | null;
  expires_in: number | null;
  isAuth: boolean;
}

export const login = createAsyncThunk(
  "auth/login",
  async (loginData: AxiosBasicCredentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await authAPI.login(loginData);
      localStorage.setItem("token", response.data.access_token);
    } catch (e) {
      const error = e as Error | AxiosError;
      rejectWithValue(error.message);
    }
  }
);

const initialState: IAuthInitialState = {
  username: localStorage.getItem("userEmail"),
  password: localStorage.getItem("userPassword"),
  refresh_token: localStorage.getItem("refreshToken"),
  expires_in: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state) => {
      state.isAuth = true;
    },
    setLogoutData: (state) => {
      state.isAuth = false;
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userPassword");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("tokenExpires");
    },
  },
});

export const { setAuthData, setLogoutData } = authSlice.actions;

export default authSlice.reducer;
