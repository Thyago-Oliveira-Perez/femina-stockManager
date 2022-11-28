import { IPageRequest, IPageResponse } from './../types/common.types';
import api from './Api';

const CommonApi = () => {

    const post = async () => {

    }

    const listPageable = async <T>(pageRequest: IPageRequest, path: string): Promise<IPageResponse<T>> => {   
        try {
            return (await api.get(`${path}`,
                {
                    params: { 
                        page: pageRequest.currentPage,
                        size: pageRequest.pageSize
                    }
                }
            )).data;
        } catch (error: any) {
            return Promise.reject(error.message);
        }
    }

    const list = async () => {

    }

    const get = async () => {

    }

    const update = async () => {

    }

    const disable = async () => {

    }

    return { listPageable }; 
};

export default CommonApi;
