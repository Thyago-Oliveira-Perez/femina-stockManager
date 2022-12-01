import { IFornecedorResponse, IPageRequest, IPageResponse } from "../types/common.types";
import CommonApi from "./Common";

const FornecedoresApi = () => {
    const url = "api/fornecedores";
    const { listPageable } = CommonApi();

    const handleError = (error: any) => {
        return Promise.reject(error.response);
    };

    const listFornecedores = async (pageable: IPageRequest): Promise<IPageResponse<IFornecedorResponse>> => {
        try {
            return (await listPageable(pageable, `${url}`));
        } catch (error: any) {
            return handleError(error);
        };
    };

    return { listFornecedores };
};

export default FornecedoresApi;
