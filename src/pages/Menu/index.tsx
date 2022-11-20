import Modal from "../../components/Modal";
import { ModalUsage } from "../../components/Modal/modal.types";
import * as S from "./styles";

const Menu = () => {
  return (
    <>
      <Modal modalUsage={ModalUsage.PRODUTOS}/>
    </>
  );
};

export default Menu;
