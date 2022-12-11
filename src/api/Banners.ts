import axios from "axios";
import { getToken } from "../services/auth.service";
import { Banners, IPageRequest, IPageResponse } from "../types/common.types";
import CommonApi from "./Common";

const BannersApi = () => {
  const url = "api/banners";
  const token = getToken();
  const api = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Accept': "application/json",
      'Authorization': token ? `Bearer ${token}` : null
    },
  });
  
  const { listPageable, get, removeImage } = CommonApi();

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

  const getBanner = async (id: string): Promise<Banners> => {
    try {
        return (await get(id, `${url}/findId`));
    } catch (error) {
        return handleError(error);
    };
  };

  const updateBanner = async (banner: FormData, id: string): Promise<any> => {
    try {
      return (await api.putForm(`${url}/${id}`, banner)).data;
    } catch (error: any) {
      return Promise.reject(error);
    };
  };

  const removeBannerImage = async (imageName: string, id: string): Promise<any> => {
    try{
      return (await removeImage(imageName ,id, `${url}/remove`));
    }catch(error: any){
      return handleError(error);
    }
  };
  
  return { insertBanner, listBanners, getBanner, updateBanner, removeBannerImage };
};

export default BannersApi;
  