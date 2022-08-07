import { IOrdersResponse } from "./types";
import { databaseAPI } from "./../../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { setOrders } from "./ordersSlice";

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (
    { offset, limit }: { offset: number; limit: number },
    { dispatch }
  ) => {
    try {
      const response: AxiosResponse<IOrdersResponse> =
        await databaseAPI.getOrders(offset, limit ?? null);
      dispatch(setOrders(response.data));
    } catch (e) {
      const error = e as AxiosError;
      console.log("ERROR orders/getOrders");
    }
  }
);
