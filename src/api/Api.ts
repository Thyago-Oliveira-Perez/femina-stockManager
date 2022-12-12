import axios, { AxiosRequestConfig } from "axios";
import toast from "react-hot-toast";
import { getToken, getLocalRefreshToken, updateLocalAccessToken, logout } from "../services/auth.service";

const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json;charset=utf-8;",
  },
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = getToken();

  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  };

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    toast.error(error.response.data);
    const originalConfig = error.config;

    if (originalConfig.url !== "/auth/login") {

      if(error.response.status === 400){
        logout();
      }

      if (error.response.status === 403) {
        try {
          const res = await api.post("http://localhost:8080/auth/refreshtoken", {
            refreshToken: getLocalRefreshToken(),
          });
          const { accessToken } = res.data;
          updateLocalAccessToken(accessToken);
          window.location.reload();
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default api;
