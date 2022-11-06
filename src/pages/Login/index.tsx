import * as S from './styles';
import TextField from '../../components/TextField';

const Login = () => {
  return (
    <S.ContainerStyled>
      <S.Box>
        <S.Title>Login</S.Title>
        <S.Form>
          <TextField
            type={'text'} 
            placeholder={'Login'}
          />
          <TextField
            type={'password'} 
            placeholder={'Password'}
          />
        </S.Form>
        <S.ButtonArea>
          <S.ButtonForm>Entrar</S.ButtonForm>
        </S.ButtonArea>
      </S.Box>
    </S.ContainerStyled>
  );
};

export default Login;
