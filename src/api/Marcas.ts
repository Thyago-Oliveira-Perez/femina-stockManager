import { Marcas, IPageRequest, IPageResponse } from "../types/common.types";
import CommonApi from "./Common";

const MarcasApi = () => {
    const url = "api/marcas";
    const { listPageable } = CommonApi();

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

    return { listMarcas };
};

export default MarcasApi;
