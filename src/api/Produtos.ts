import { IPageResponse } from './../types/common.types';
import axios from "axios";
import {
  INewProduto,
  INewProdutoResponse,
} from "../components/Modal/Components/Forms/FormProduto/types";
import { getToken } from "../services/auth.service";
import { IPageRequest } from "../types/common.types";
import CommonApi from "./Common";

const token = getToken();

const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8;;ultipart/form-data',
    'Authorization': token ? `Bearer ${token}` : null
  },
});

const ProdutoApi = () => {
  const url = "api/produtos";
  const { listPageable } = CommonApi();

  const handleError = (error: any) => {
    return Promise.reject(error.response);
  };

  const cadastro = async (produto: FormData): Promise<INewProdutoResponse> => {
    try {
      return await (
        await api.post(`${url}/estoque/insert`, {
          body: produto,
        })
      ).data;
    } catch (error: any) {
      return handleError(error);
    }
  };

  const listProdutos = async (pageable: IPageRequest): Promise<IPageResponse<INewProdutoResponse>> => {
    try {
      return (await listPageable(pageable,`${url}/estoque/list`));
    } catch (error: any) {
      return handleError(error);
    }
  }

  return { cadastro, listProdutos };
};

export default ProdutoApi;
