import axios from "axios";
import AuthCookies from "../cookie/authToken.cookie";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

const axiosInstance = axios.create();

//setting up request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    config.url = BASE_URL + config.url;

    const token = AuthCookies.GetAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; //every request sent using axios instance includes authentication Token for protected routes.
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
