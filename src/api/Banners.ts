import axios from "axios";
import { getToken } from "../services/auth.service";
import { Banners, IPageRequest, IPageResponse } from "../types/common.types";
import CommonApi from "./Common";

const token = getToken();

const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8;;ultipart/form-data',
    'Authorization': token ? `Bearer ${token}` : null
  },
});

const BannersApi = () => {
    const url = "api/banners";
    const { listPageable } = CommonApi();
  
    const handleError = (error: any) => {
      return Promise.reject(error.response);
    };
  
    const listBanners = async (pageable: IPageRequest): Promise<IPageResponse<Banners>> => {
      try {
        return (await listPageable(pageable,`${url}`));
      } catch (error: any) {
        return handleError(error);
      };
    };
  
    return { listBanners };
  };
  
  export default BannersApi;
  