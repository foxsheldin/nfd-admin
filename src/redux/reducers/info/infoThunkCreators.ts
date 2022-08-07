import { RootState } from "./../../index";
import {
  ICarsResponseData,
  ICategoriesResponseData,
  IRateResponseData,
  IRateTypeResponseData,
} from "./types";
import { AxiosError, AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { databaseAPI } from "../../../api/api";
import {
  setCars,
  setCategories,
  setCitiesData,
  setOrderStatusData,
  setRate,
  setRateType,
} from "./infoSlice";

export const getCars = createAsyncThunk(
  "info/getCars",
  async (
    { offset, limit }: { offset?: number; limit?: number },
    { dispatch, getState }
  ) => {
    const state = getState() as RootState;
    let carsExist = state.info.carsData?.count;
    if (!carsExist) {
      try {
        const response: AxiosResponse<ICarsResponseData> =
          await databaseAPI.getCars();
        dispatch(setCars(response.data));
      } catch (e) {
        const error = e as AxiosError;
        console.log("ERROR info/getCars");
      }
    }
  }
);

export const getCategories = createAsyncThunk(
  "info/getCategories",
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    let categoriesExist = state.info.categoriesData?.count;
    if (!categoriesExist) {
      try {
        const response: AxiosResponse<ICategoriesResponseData> =
          await databaseAPI.getCategories();
        dispatch(setCategories(response.data));
      } catch (e) {
        const error = e as AxiosError;
        console.log("ERROR info/getCategories");
      }
    }
  }
);

export const getRate = createAsyncThunk(
  "info/getRate",
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    let rateExist = state.info.rateData?.count;
    if (!rateExist) {
      try {
        const response: AxiosResponse<IRateResponseData> =
          await databaseAPI.getRate();
        dispatch(setRate(response.data));
      } catch (e) {
        const error = e as AxiosError;
        console.log("ERROR info/getRate");
      }
    }
  }
);

export const getRateType = createAsyncThunk(
  "info/getRateType",
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    let rateTypeExist = state.info.rateTypeData?.count;
    if (!rateTypeExist) {
      try {
        const response: AxiosResponse<IRateTypeResponseData> =
          await databaseAPI.getRateType();
        dispatch(setRateType(response.data));
      } catch (e) {
        const error = e as AxiosError;
        console.log("ERROR info/getRateTypes");
      }
    }
  }
);

export const getCities = createAsyncThunk(
  "info/getCities",
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    let citiesExist = state.info.citiesData?.count;
    if (!citiesExist) {
      try {
        const response: AxiosResponse<IRateTypeResponseData> =
          await databaseAPI.getCities();
        dispatch(setCitiesData(response.data));
      } catch (e) {
        const error = e as AxiosError;
        console.log("ERROR info/getCities");
      }
    }
  }
);

export const getOrderStatus = createAsyncThunk(
  "info/getOrderStatus",
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    let orderStatusExist = state.info.orderStatusData?.count;
    if (!orderStatusExist) {
      try {
        const response: AxiosResponse<IRateTypeResponseData> =
          await databaseAPI.getOrderStatus();
        dispatch(setOrderStatusData(response.data));
      } catch (e) {
        const error = e as AxiosError;
        console.log("ERROR info/getOrderStatus");
      }
    }
  }
);
