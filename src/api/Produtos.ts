import {
  INewProduto,
  INewProdutoResponse,
} from "../components/Modal/Components/Forms/FormProduto/types";
import Api from "./Api";

const ProdutoApi = () => {
  const url = "api/produtos";

  const handleError = (error: any) => {
    return Promise.reject(error.response);
  };

  const cadastro = async (produto: FormData): Promise<INewProdutoResponse> => {
    try {
      return await (
        await Api.post(`${url}/estoque/insert`, {
          body: produto,
        })
      ).data;
    } catch (error: any) {
      return handleError(error);
    }
  };

  return { cadastro };
};

export default ProdutoApi;
