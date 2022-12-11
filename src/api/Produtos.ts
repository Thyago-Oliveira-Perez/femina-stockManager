import { IPageResponse, IProdutoResponse } from './../types/common.types';
import axios from "axios";
import {
  INewProduto
} from "../components/Modal/Components/Forms/FormProduto/types";
import { getToken } from "../services/auth.service";
import { IPageRequest } from "../types/common.types";
import CommonApi from "./Common";

const ProdutoApi = () => {
  const url = "api/produtos";
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

  const cadastro = async (produto: FormData): Promise<any> => {
    try {
      return (await api.postForm(`${url}/estoque/insert`, produto)).data;
    } catch (error: any) {
      return Promise.reject(error);
    };
  };

  const listProdutos = async (pageable: IPageRequest): Promise<IPageResponse<IProdutoResponse>> => {
    try {
      return (await listPageable(pageable,`${url}/estoque/list`));
    } catch (error: any) {
      return handleError(error);
    };
  };

  const getProductInfos = async (id: string): Promise<any> => {
    try{
      return (await get(id, `${url}/catalogo`));
    }catch(error: any){
      return handleError(error);
    }
  };

  const updateProduct = async (produto: FormData, id: string): Promise<any> => {
    try {
      return (await api.putForm(`${url}/estoque/${id}`, produto)).data;
    } catch (error: any) {
      return Promise.reject(error);
    };
  };

  const removeProductImage = async (imageName: string, id: string): Promise<any> => {
    try{
      return (await removeImage(imageName ,id, `${url}/estoque/remove-image`));
    }catch(error: any){
      return handleError(error);
    }
  };

  return { cadastro, listProdutos, getProductInfos, updateProduct, removeProductImage };
};

export default ProdutoApi;
