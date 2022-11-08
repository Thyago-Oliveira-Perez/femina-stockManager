import { ILoginRequest, ILoginResult } from '../types/login.types';
import Api from './Api';

export class AuthApi {
    
    private url = '/auth';

    private handleError(error: any) {
        return Promise.reject(error.response);
    };

    public login = async (credentials: ILoginRequest): Promise<ILoginResult> => {
        try {
            return await (await Api.post(`${this.url}/login`, credentials)).data;
        } catch (error: any) {
            return this.handleError(error);
        }
    };

};

export default AuthApi;
