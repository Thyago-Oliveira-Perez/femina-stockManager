import * as S from "./styles";
import { Button } from "@mui/material";
import { IFormFornecedorProps } from "./types";
import { TextFieldLables } from "../../SelectField/selectfield.types";
import useFormFornecedor from "./hooks/useFormFornecedor";
import TextFieldModal from "../../TextField";

const FormFornecedor = (props: IFormFornecedorProps) => {

  const { 
    fornecedor, 
    handleChange, 
    handleCancel, 
    handleRegister 
  } = useFormFornecedor({mode: props.mode, id: props.id});

  return(
    <>
      <S.Modal>
        <S.Tittle>
          <h3>Novo Fornecedor</h3>
        </S.Tittle>
        <S.Form>
          <TextFieldModal
            value={fornecedor.nome}
            name={TextFieldLables.NOME.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.NOME}
          />
          <TextFieldModal
            value={fornecedor.cnpj}
            name={TextFieldLables.CNPJ.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.CNPJ}
          />
          <TextFieldModal
            value={fornecedor.telefone}
            name={TextFieldLables.TELEFONE.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.TELEFONE}
          />
          <TextFieldModal
            value={fornecedor.email}
            name={TextFieldLables.EMAIL.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.EMAIL}
          />
        </S.Form>
        <S.ButtonsSection>
        <Button
          variant="contained"
          style={{ backgroundColor: "#BB2929" }}
          onClick={() => handleCancel()}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#118DE8" }}
          onClick={() => handleRegister()}
        >
          Cadastrar
        </Button>
      </S.ButtonsSection>
      </S.Modal>
    </>
  )
}

export default FormFornecedor;