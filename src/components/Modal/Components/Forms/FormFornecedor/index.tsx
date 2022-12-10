import * as S from "./styles";
import { Button } from "@mui/material";
import { IFormFornecedorProps } from "./types";
import { TextFieldLables } from "../../SelectField/selectfield.types";
import useFormFornecedor from "./hooks/useFormFornecedor";
import TextFieldModal from "../../TextField";
import { FormFunction } from "../FormProduto/types";

const FormFornecedor = (props: IFormFornecedorProps) => {

  const { id, mode } = props;
  const { 
    fornecedor, 
    handleChange, 
    handleCancel, 
    handleRegister 
  } = useFormFornecedor({mode: mode, id: id});

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
            disabled={mode === FormFunction.view}
          />
          <TextFieldModal
            value={fornecedor.cnpj}
            name={TextFieldLables.CNPJ.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.CNPJ}
            disabled={mode === FormFunction.view}
          />
          <TextFieldModal
            value={fornecedor.telefone}
            name={TextFieldLables.TELEFONE.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.TELEFONE}
            disabled={mode === FormFunction.view}
          />
          <TextFieldModal
            value={fornecedor.email}
            name={TextFieldLables.EMAIL.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.EMAIL}
            disabled={mode === FormFunction.view}
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
        {
          mode !== FormFunction.view ? 
          <Button
            variant="contained"
            style={{ backgroundColor: "#118DE8" }}
            onClick={() => handleRegister()}
          >
            Cadastrar
          </Button>
          : null
        }
      </S.ButtonsSection>
      </S.Modal>
    </>
  )
}

export default FormFornecedor;