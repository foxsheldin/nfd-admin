import { IInfoInitialState } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IInfoInitialState = {
  carsData: null,
  categoriesData: null,
  rateData: null,
  rateTypeData: null,
  citiesData: null,
  orderStatusData: null,
  currentOffsetCars: 0,
  limitLoadingCars: 6,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setCars: (state, action) => {
      state.carsData = action.payload;
    },
    setCategories: (state, action) => {
      state.categoriesData = action.payload;
    },
    setRate: (state, action) => {
      state.rateData = action.payload;
    },
    setRateType: (state, action) => {
      state.rateTypeData = action.payload;
    },
    setCurrentOffsetCars: (state, action) => {
      state.currentOffsetCars = action.payload;
    },
    setCitiesData: (state, action) => {
      state.citiesData = action.payload;
    },
    setOrderStatusData: (state, action) => {
      state.orderStatusData = action.payload;
    },
  },
});

export const {
  setCars,
  setCategories,
  setRate,
  setRateType,
  setCurrentOffsetCars,
  setCitiesData,
  setOrderStatusData,
} = infoSlice.actions;

export default infoSlice.reducer;
