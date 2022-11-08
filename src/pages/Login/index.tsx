import * as S from './styles';
import TextField from '../../components/TextField';
import useLogin from './hooks/useLogin';

const Login = () => {

  const { handleInput, handleSubmit, state } = useLogin();

  return (
    <S.ContainerStyled>
      <S.Box>
        <S.Title>Login</S.Title>
        <S.Form>
          <TextField
            type={'text'} 
            name={'login'}
            placeholder={'Login'}
            onChange={(e) => handleInput(e)}
          />
          <TextField
            type={'password'} 
            name={'password'}
            placeholder={'Password'}
            onChange={(e) => handleInput(e)}
          />
        </S.Form>
        <S.ButtonArea>
          <S.ButtonForm
            onClick={handleSubmit}
          >
            Entrar
          </S.ButtonForm>
        </S.ButtonArea>
      </S.Box>
    </S.ContainerStyled>
  );
};

export default Login;
