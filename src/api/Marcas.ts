import { Marcas, IPageRequest, IPageResponse } from "../types/common.types";
import CommonApi from "./Common";

const MarcasApi = () => {
    const url = "api/marcas";
    const { listPageable, disable } = CommonApi();

    const handleError = (error: any) => {
        return Promise.reject(error.response);
    };

    const listMarcas = async (pageable: IPageRequest): Promise<IPageResponse<Marcas>> => {
        try {
            return (await listPageable(pageable, `${url}`));
        } catch (error: any) {
            return handleError(error);
        };
    };

    const disableMarcas = async (id: string): Promise<any> => {
        try {
          return (await disable(id, `${url}/disable`));
        } catch(error: any) {
          return handleError(error);
        };
    };

    return { listMarcas, disableMarcas };
};

export default MarcasApi;
