import { Modelos, IPageRequest, IPageResponse } from "../types/common.types";
import CommonApi from "./Common";

const ModelosApi = () => {
    const url = "api/modelos";
    const { listPageable, post, disable } = CommonApi();

    const handleError = (error: any) => {
        return Promise.reject(error.response);
    };
    
    const addNewModelo = async (newModelo: string) => {
        try {
            return (await post(newModelo, `${url}`));
        } catch(error: any) {
            return handleError(error);
        };
    };

    const listModelos = async (pageable: IPageRequest): Promise<IPageResponse<Modelos>> => {
        try {
            return (await listPageable(pageable, `${url}`));
        } catch (error: any) {
            return handleError(error);
        };
    };

    const disableModelos = async (id: string): Promise<any> => {
        try {
          return (await disable(id, `${url}/disable`));
        } catch(error: any) {
          return handleError(error);
        };
    };

    return { addNewModelo, listModelos, disableModelos };
};

export default ModelosApi;
