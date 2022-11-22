import axios from "axios"
import { initInterceptor } from "./interceptor"

export const axiosInstance = axios.create({
  baseURL: "http://dev-api.rnsb.ru/api/",
  headers: {
    "Content-Type": "application/json"
  },
});

initInterceptor(axiosInstance)