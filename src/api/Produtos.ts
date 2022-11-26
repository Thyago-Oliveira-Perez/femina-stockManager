import { INewProduto, INewProdutoResponse } from '../components/Modal/Components/FormProduto/types';
import Api from './Api';

const ProdutoApi = () => {

  const url = 'api/produtos';

  const handleError = (error: any) => {
      return Promise.reject(error.response);
  };

   const cadastro = async (produto: INewProduto): Promise<INewProdutoResponse> => {
      try {
          return await (await Api.post(`${url}/estoque/insert`, produto)).data;
      } catch (error: any) {
          return handleError(error);
      }
  };

  return { cadastro };
};

export default ProdutoApi;
