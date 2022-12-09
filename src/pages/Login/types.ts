export interface ILoginRequest {
  login: string;
  password: string;
}

export interface ILoginResult {
  accessToken: string;
  refreshToken: string;
  authenticationType: string;
}

export interface State {
  loading: boolean;
  error: boolean;
  data: {};
}

export type Action =
  | { type: 'request' }
  | { type: 'success', results: ILoginResult }
  | { type: 'error', error: string };