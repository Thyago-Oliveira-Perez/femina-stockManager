import { useReducer, useState } from 'react';
import AuthApi from '../../../api/Auth';
import { ILoginRequest } from '../../../types/login.types';
import { initialState, reducerLogin } from './useReducer';

const useLogin = () => {

  const api = new AuthApi();
  const [state, dispatch] = useReducer(reducerLogin, initialState);
  const [loginForm, setLoginForm] = useState<ILoginRequest>({
    login: '',
    password: ''
  });

  const handleInput = (event: any) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
  };

  const handleSubmit = () => {
    dispatch({ type: 'request' })
    api.login(loginForm)
      .then((response) => {
        dispatch({ type: 'success', results: response })
      }).catch((error) => {
        dispatch({ type: 'error', error: error })
      });
  };

  return { handleInput, handleSubmit, state };
};

export default useLogin;
