
import * as S from "./styles";
import { IModalProps } from "./modal.types";
import { Box, Modal as MaterialUiModal } from "@mui/material";
import { useState } from "react";
import FormProduto from "./Components/Forms/FormProduto";

const Modal = (props: IModalProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxHeight: '80%',
    bgcolor: 'background.paper',
    overflow: 'auto',
    boxShadow: 24,
    p: 4,
    borderRadius: 4 
  };

  const modalUsage: any = {
    PRODUTOS: () => {
      return <FormProduto productId={props.productId} function={props.function} isModalOpen={isOpen} isToCloseModal={setIsOpen}/>;
    },
    CATEGORIAS: () => {},
  };

  return (
    <S.Modal>
      <MaterialUiModal
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>{modalUsage[props.modalUsage]()}</Box>
      </MaterialUiModal>
    </S.Modal>
  );
};

export default Modal;
