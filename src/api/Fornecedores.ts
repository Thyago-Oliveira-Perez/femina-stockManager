import { FornecedorRequest, IFornecedor } from "../components/Modal/Components/Forms/FormFornecedor/types";
import { IFornecedorResponse, IPageRequest, IPageResponse } from "../types/common.types";
import CommonApi from "./Common";

const FornecedoresApi = () => {
    const url = "api/fornecedores";
    const { post, listPageable, get, update, disable } = CommonApi();

    const handleError = (error: any) => {
        return Promise.reject(error);
    };

    const insertFornecedor = async (fornecedor: FornecedorRequest) => {
        try {
            return (await post(fornecedor, url));
        } catch (error) {
            return handleError(error);
        };
    };

    const listFornecedores = async (pageable: IPageRequest): Promise<IPageResponse<IFornecedorResponse>> => {
        try {
            return (await listPageable(pageable, `${url}`));
        } catch (error) {
            return handleError(error);
        };
    };

    const getFornecedores = async (id: string): Promise<IFornecedor> => {
        try {
            return (await get(id, `${url}`));
        } catch (error) {
            return handleError(error);
        };
    };

    const updateFornecedor = async (fornecedor: FornecedorRequest, id: string): Promise<any> => {
        try {
            return (await update(fornecedor, id, url));
        } catch (error) {
            return handleError(error);
        };
    };

    const disableFornecedores = async (id: string): Promise<any> => {
        try {
          return (await disable(id, `${url}/disable`));
        } catch(error: any) {
          return handleError(error);
        };
    };

    return { insertFornecedor, listFornecedores, getFornecedores, updateFornecedor, disableFornecedores };
};

export default FornecedoresApi;
