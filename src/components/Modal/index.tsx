
import * as S from "./styles";
import { IModalProps } from "./modal.types";
import { Box, Modal as MaterialUiModal } from "@mui/material";
import FormProduto from "./Components/Forms/FormProduto";
import { useNavigate, useParams } from "react-router-dom";

const Modal = (props: IModalProps) => {
  
  const navigate = useNavigate();
  const { module, id } = useParams();

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
      return <FormProduto productId={Number(id)} function={props.function} isModalOpen={true} isToCloseModal={() => navigate(`/menu/${module}`)}/>;
    },
    FORNECEDORES: () => {
      return <>Oi</>
    },
    BANNERS: () => {},
  };

  return (
    <S.Modal>
      <MaterialUiModal
        open={true}
        onClose={() => navigate(`/menu/${module}`) }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>{modalUsage[module !== undefined ? module.toLocaleUpperCase() : '']()}</Box>
      </MaterialUiModal>
    </S.Modal>
  );
};

export default Modal;
