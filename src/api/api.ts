import axios, { AxiosBasicCredentials, AxiosInstance } from "axios";
import { v4 } from "uuid";

const getAuthToken = (): string => {
  if (!localStorage.getItem("authToken")) {
    const authToken = window.btoa(`${v4()}:${process.env.REACT_APP_DB_SECRET}`);
    localStorage.setItem("authToken", authToken);

    return authToken;
  }
  return localStorage.getItem("authToken") as string;
};

const instance: AxiosInstance = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api/",
  headers: {
    "X-Api-Factory-Application-Id": process.env.REACT_APP_DB_API_KEY as string,
  },
});

export const authAPI = {
  login({ username, password }: AxiosBasicCredentials) {
    return instance.post(
      "auth/login",
      { username, password },
      {
        headers: {
          Authorization: `Basic ${getAuthToken()}`,
        },
      }
    );
  },
  logout() {
    return instance.post(
      "auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
  },
  refresh(token: string | null) {
    return instance.post(
      "auth/refresh",
      { refreshToken: token },
      {
        headers: {
          Authorization: `Basic ${localStorage.getItem("authToken")}`,
        },
      }
    );
  },
  check() {
    return instance.get("auth/check");
  },
};

export const databaseAPI = {
  getOrders(offset: number, limit: number = 6) {
    return instance.get("db/order", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        offset,
        limit,
      },
    });
  },
  getOrder(orderId: string) {
    return instance.get(`db/order/${orderId}`);
  },
  getCars(category: any = null) {
    return instance.get("db/car", {
      params: {
        categoryId: category?.id,
      },
    });
  },
  getCities() {
    return instance.get("db/city");
  },
  getOrderStatus() {
    return instance.get("db/orderStatus");
  },
  getCategories() {
    return instance.get("db/category");
  },
  getRate() {
    return instance.get("db/rate");
  },
  getRateType() {
    return instance.get("db/rateType");
  },
};
