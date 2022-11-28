import axios, { AxiosRequestConfig } from 'axios';
import { getToken } from '../services/auth.service';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8;',
  },
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = getToken();
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;