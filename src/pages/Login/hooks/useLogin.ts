import { useReducer, useState } from "react";
import AuthApi from "../../../api/Auth";
import { initialState, reducerLogin } from "./useReducer";
import { saveToken } from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { ILoginRequest } from "../types";

const useLogin = () => {
  const { login } = AuthApi();
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState<ILoginRequest>({
    login: "",
    password: "",
  });
  const [showFeedBack, setShowFeedBack] = useState<boolean>(false);

  /**
   * style do modal de aviso
   */
  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "20%",
    height: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "background.paper",
    overflow: "auto",
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  };

  const handleInput = (event: any) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    login(loginForm)
      .then((response) => {
        saveToken(response.accessToken);
        navigate("menu/produtos");
      })
      .catch((error) => {
        setShowFeedBack(true);
      });
  };

  return {
    handleInput,
    handleSubmit,
    loginForm,
    modalStyle,
    showFeedBack,
    setShowFeedBack,
  };
};

export default useLogin;
