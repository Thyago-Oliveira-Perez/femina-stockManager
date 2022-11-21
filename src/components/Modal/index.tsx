import FormProduto from "./Components/FormProduto";
import { IModalProps } from "./modal.types";
import * as S from "./styles";

const Modal = (props: IModalProps) => {
  const modalUsage: any = {
    PRODUTOS: () => {
      return <FormProduto />;
    },
    CATEGORIAS: () => {},
  };

  return <S.Modal>{modalUsage[props.modalUsage]()}</S.Modal>;
};

export default Modal;
