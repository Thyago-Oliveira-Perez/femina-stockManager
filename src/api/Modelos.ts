import { Modelos, IPageRequest, IPageResponse } from "../types/common.types";
import CommonApi from "./Common";

const ModelosApi = () => {
    const url = "api/modelos";
    const { listPageable } = CommonApi();

    const handleError = (error: any) => {
        return Promise.reject(error.response);
    };

    const listModelos = async (pageable: IPageRequest): Promise<IPageResponse<Modelos>> => {
        try {
            return (await listPageable(pageable, `${url}`));
        } catch (error: any) {
            return handleError(error);
        };
    };

    return { listModelos };
};

export default ModelosApi;
