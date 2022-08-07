import { createSlice } from "@reduxjs/toolkit";
import { IOrdersInitialState } from "./types";

const initialState: IOrdersInitialState = {
  ordersData: null,
  countOrders: null,
  currentOffset: 0,
  limitLoading: 6,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.ordersData = action.payload;
      state.countOrders = action.payload.count;
    },
    setCurrentOffset: (state, action) => {
      state.currentOffset = action.payload;
    },
  },
});

export const { setOrders, setCurrentOffset } = ordersSlice.actions;

export default ordersSlice.reducer;
