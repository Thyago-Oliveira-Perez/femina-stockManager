import * as S from "./styles";
import TextField from "../../components/TextField";
import useLogin from "./hooks/useLogin";
import ModalUserFeedback from "../../components/ModalUserFeedback";
import { ModalUsage } from "../../components/ModalUserFeedback/types";

const Login = () => {
  const {
    handleInput,
    handleSubmit,
    loginForm,
    modalStyle,
    showFeedBack,
    setShowFeedBack,
  } = useLogin();

  return (
    <S.ContainerStyled>
      <S.Box>
        <S.Title>Login</S.Title>
        <S.Form>
          <TextField
            type={"text"}
            name={"login"}
            placeholder={"Login"}
            onChange={(e) => handleInput(e)}
          />
          <TextField
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            onChange={(e) => handleInput(e)}
          />
        </S.Form>
        <S.ButtonArea>
          <S.ButtonForm
            type="button"
            onClick={handleSubmit}
            disabled={
              loginForm.login !== "" && loginForm.password !== "" ? false : true
            }
            style={
              loginForm.login !== "" && loginForm.password !== ""
                ? {}
                : {
                    backgroundColor: "#888888",
                  }
            }
          >
            Entrar
          </S.ButtonForm>
        </S.ButtonArea>
      </S.Box>
      {/* Modal de aviso username/password incorrect */}
      <ModalUserFeedback
        open={showFeedBack}
        onClose={() => setShowFeedBack(false)}
        style={modalStyle}
        usage={ModalUsage.feedback}
      >
        Usuário ou senhas incorretos.
      </ModalUserFeedback>
    </S.ContainerStyled>
  );
};

export default Login;
