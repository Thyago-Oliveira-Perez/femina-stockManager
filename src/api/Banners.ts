import axios from "axios";
import { BannerRequest } from "../components/Modal/Components/Forms/FormBanner/types";
import { getToken } from "../services/auth.service";
import { Banners, IPageRequest, IPageResponse } from "../types/common.types";
import CommonApi from "./Common";

const token = getToken();

const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'multipart/form-data',
    'Accept': "application/json",
    'Authorization': token ? `Bearer ${token}` : null
  },
});

const BannersApi = () => {
    const url = "api/banners";
    const { listPageable } = CommonApi();
  
    const handleError = (error: any) => {
      return Promise.reject(error.response);
    };
  
    const insertBanner = async (banner :FormData) => {
      try {
        return (await api.postForm(`${url}`, banner)).data;
      } catch (error: any) {
        return Promise.reject(error);
      };
    };

    const listBanners = async (pageable: IPageRequest): Promise<IPageResponse<Banners>> => {
      try {
        return (await listPageable(pageable,`${url}/list`));
      } catch (error: any) {
        return handleError(error);
      };
    };
  
    return { insertBanner, listBanners };
  };
  
  export default BannersApi;
  