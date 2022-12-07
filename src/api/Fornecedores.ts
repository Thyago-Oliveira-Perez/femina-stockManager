import { FornecedorRequest } from "../components/Modal/Components/Forms/FormFornecedor/types";
import { IFornecedorResponse, IPageRequest, IPageResponse } from "../types/common.types";
import CommonApi from "./Common";

const FornecedoresApi = () => {
    const url = "api/fornecedores";
    const { post, listPageable } = CommonApi();

    const handleError = (error: any) => {
        return Promise.reject(error);
    };

    const insertFornecedor = async (fornecedor: FornecedorRequest) => {
        try {
            return (await post(fornecedor, url))
        } catch (error) {
            return handleError(error);
        }
    }

    const listFornecedores = async (pageable: IPageRequest): Promise<IPageResponse<IFornecedorResponse>> => {
        try {
            return (await listPageable(pageable, `${url}`));
        } catch (error) {
            return handleError(error);
        };
    };

    return { insertFornecedor, listFornecedores };
};

export default FornecedoresApi;
