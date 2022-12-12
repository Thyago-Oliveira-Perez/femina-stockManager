import { Categorias, IPageRequest, IPageResponse } from "../types/common.types";
import CommonApi from "./Common";

const CategoriasApi = () => {
    const url = "api/categorias";
    const { listPageable, disable } = CommonApi();

    const handleError = (error: any) => {
        return Promise.reject(error.response);
    };

    const listCategorias = async (pageable: IPageRequest): Promise<IPageResponse<Categorias>> => {
        try {
            return (await listPageable(pageable, `${url}`));
        } catch (error: any) {
            return handleError(error);
        };
    };
    
    const disableCategorias = async (id: string): Promise<any> => {
        try {
          return (await disable(id, `${url}/disable`));
        } catch(error: any) {
          return handleError(error);
        };
    };

    return { listCategorias, disableCategorias };
};

export default CategoriasApi;
