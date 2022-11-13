import { useReducer, useState } from 'react';
import AuthApi from '../../../api/Auth';
import { ILoginRequest } from '../../../types/login.types';
import { initialState, reducerLogin } from './useReducer';
import { saveToken } from '../../../services/auth.service';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {

  const { login } = AuthApi();
  const navigate = useNavigate();
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
    login(loginForm)
      .then((response) => {
        dispatch({ type: 'success', results: response })
        saveToken(response.token);
        navigate('menu');
      }).catch((error) => {
        dispatch({ type: 'error', error: error })
      });
  };

  return { handleInput, handleSubmit, state };
};

export default useLogin;
