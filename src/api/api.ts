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
