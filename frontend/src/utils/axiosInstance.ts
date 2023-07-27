import { baseUrl } from "@/utils";
import axios from "axios";
import { getToken } from "./token";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

const token = getToken();

axiosInstance.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : "";

export default axiosInstance;
