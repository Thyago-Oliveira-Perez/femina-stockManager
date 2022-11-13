import { ILoginRequest, ILoginResult } from '../types/login.types';
import Api from './Api';

const AuthApi = () => {
    
    const url = '/auth';

    const handleError = (error: any) => {
        return Promise.reject(error.response);
    };

     const login = async (credentials: ILoginRequest): Promise<ILoginResult> => {
        try {
            return await (await Api.post(`${url}/login`, credentials)).data;
        } catch (error: any) {
            return handleError(error);
        }
    };

    return { login };
};

export default AuthApi;
