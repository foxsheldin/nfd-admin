import { createSlice } from "@reduxjs/toolkit";

export interface IAuthInitialState {
  refresh_token: string | null;
  expires_in: number | null;
  isAuth: boolean;
  errorServerMessage: string | null;
}

const initialState: IAuthInitialState = {
  refresh_token: localStorage.getItem("refreshToken"),
  expires_in: null,
  isAuth: false,
  errorServerMessage: null,
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
    },
    setErrorServerMessage: (state, action) => {
      state.errorServerMessage = action.payload;
    },
  },
});

export const { setAuthData, setLogoutData, setErrorServerMessage } =
  authSlice.actions;

export default authSlice.reducer;
