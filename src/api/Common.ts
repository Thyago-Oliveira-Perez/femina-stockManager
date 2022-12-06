import { IPageRequest, IPageResponse } from './../types/common.types';
import api from './Api';

const CommonApi = () => {

    const post = async (object: any, path: string) => {
        try {
            return (await api.post(`${path}`, object)).data;
        } catch (error: any) {
            return Promise.reject(error.message);
        };
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
        };
    };

    const list = async () => {

    }

    const get = async <T>(id: number, path: string): Promise<T>=> {
        try {
            return (await api.get(`${path}/${id}`)).data;
        } catch (error: any) {
            return Promise.reject(error.message);
        }
    }

    const update = async () => {

    }

    const disable = async () => {

    }

    return { listPageable, get, post}; 
};

export default CommonApi;
