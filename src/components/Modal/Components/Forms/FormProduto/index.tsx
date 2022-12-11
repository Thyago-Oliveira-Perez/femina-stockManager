import * as S from "./styles";
import { Button, Checkbox, FormControl } from "@mui/material";
import NumberFieldModal from "../../NumberFieldModal";
import SelectField from "../../SelectField";
import {
  SelectFieldLabels,
  TextFieldLables,
} from "../../SelectField/selectfield.types";
import TextFieldModal from "../../TextField";
import { actionFile, FormFunction, IFromProdutoProps } from "./types";
import useFormProduto from "./hooks/useFormProduto";
import ModalUserFeedback from "../../../../ModalUserFeedback";
import { ModalUsage } from "../../../../ModalUserFeedback/types";
import ImageUpload from "../../../../ImageUpload";

const FormProduto = (props: IFromProdutoProps) => {
  const {
    label,
    marcasOptions,
    modelosOptions,
    categoriasOptions,
    fornecedoresOptions,
    produto,
    setProduto,
    tamanhos,
    showMessageEmptyFields,
    setShowMessageEmptyFields,
    modalStyle,
    handleFileChange,
    handleChange,
    handleChangeNumber,
    handleCancel,
    handleRegister,
    images,
    showMessageLimitFiles,
    setShowMessageLimitFiles,
  } = useFormProduto(props);

  return (
    <S.Modal>
      <S.Tittle>
        {props.function === FormFunction.new && <h3>Novo Produto</h3>}
        {props.function === FormFunction.view && <h3>Visualizar Produto</h3>}
        {props.function === FormFunction.edit && <h3>Editar Produto</h3>}
      </S.Tittle>
      <S.Section1>
        <S.Field>
          <TextFieldModal
            value={produto.nome}
            name={TextFieldLables.NOME.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.NOME}
            disabled={props.function === FormFunction.view}
          />
        </S.Field>
        <S.Field>
          <TextFieldModal
            value={produto.cor}
            name={TextFieldLables.COR.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.COR}
            disabled={props.function === FormFunction.view}
          />
        </S.Field>
        <S.Field>
          <TextFieldModal
            value={produto.codigo}
            name={TextFieldLables.CODIGO.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.CODIGO}
            disabled={props.function === FormFunction.view}
          />
        </S.Field>
        <S.Field>
          <SelectField
            label={SelectFieldLabels.MARCA}
            value={produto.marca}
            name={SelectFieldLabels.MARCA.toLowerCase()}
            onChange={(e) => handleChange(e)}
            options={marcasOptions}
            disabled={props.function === FormFunction.view}
          />
        </S.Field>
        <S.Field>
          <SelectField
            label={SelectFieldLabels.MODELO}
            value={produto.modelo}
            name={SelectFieldLabels.MODELO.toLowerCase()}
            onChange={(e) => handleChange(e)}
            options={modelosOptions}
            disabled={props.function === FormFunction.view}
          />
        </S.Field>
        <S.Field>
          <SelectField
            label={SelectFieldLabels.TAMANHO}
            value={produto.tamanho}
            name={SelectFieldLabels.TAMANHO.toLowerCase()}
            onChange={(e) => handleChange(e)}
            options={tamanhos}
            disabled={props.function === FormFunction.view}
          />
        </S.Field>
        <S.Field>
          <SelectField
            label={SelectFieldLabels.CATEGORIA}
            value={produto.categoria}
            name={SelectFieldLabels.CATEGORIA.toLowerCase()}
            onChange={(e) => handleChange(e)}
            options={categoriasOptions}
            disabled={props.function === FormFunction.view}
          />
        </S.Field>
        <S.Field>
          <SelectField
            label={SelectFieldLabels.FORNECEDOR}
            value={produto.fornecedor}
            name={SelectFieldLabels.FORNECEDOR.toLowerCase()}
            onChange={(e) => handleChange(e)}
            options={fornecedoresOptions}
            disabled={props.function === FormFunction.view}
          />
        </S.Field>
        <S.Field>
          <NumberFieldModal
            value={produto.valor}
            name={TextFieldLables.VALOR.toLowerCase()}
            onChange={(e) => handleChangeNumber(e)}
            label={TextFieldLables.PRECO}
            disabled={props.function === FormFunction.view}
          />
        </S.Field>
      </S.Section1>
      <S.Section2>
        <div style={{ width: "90%" }}>
          <textarea
            name={TextFieldLables.DESCRICAO.toLowerCase()}
            id=""
            value={produto.descricao}
            rows={20}
            style={{
              margin: "20px 20px",
              minWidth: "97.2%",
              maxWidth: "97.2%",
              height: "120px",
              borderBottom: "solid 1px #7A0000",
              resize: "none"
            }}
            onChange={(e) => handleChange(e)}
            placeholder={TextFieldLables.DESCRICAO}
            disabled={props.function === FormFunction.view}
          ></textarea>
          {/* input upload image */}
          <ImageUpload 
            images={images} 
            setShowMessageLimitFiles={setShowMessageLimitFiles} 
            handleFile={
              (e: any, action: actionFile, index?: number) => 
              handleFileChange(e, action, index)
            }
            disabled={props.function === FormFunction.view}
            mode={props.function}
            />
          {/* -------- */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Checkbox
              {...label}
              name={"destaque"}
              checked={produto.destaque}
              onClick={(e) =>
                setProduto({ ...produto, destaque: !produto.destaque })
              }
              disabled={props.function === FormFunction.view}
            />
            <label
              style={{
                color: "#9B4A46",
                fontSize: "20px",
              }}
            >
              <strong>O produto é um destaque?</strong>
            </label>
          </div>
        </div>
      </S.Section2>
      <S.ButtonsSection>
        <Button
          variant="contained"
          style={{ backgroundColor: "#BB2929" }}
          onClick={() => handleCancel()}
        >
          Cancelar
        </Button>
        {
          props.function !== FormFunction.view ? 
          <Button
            variant="contained"
            style={{ backgroundColor: "#118DE8" }}
            onClick={() => handleRegister()}
          >
            Salvar
          </Button>
          : null
        }
      </S.ButtonsSection>
      {/* Modal de aviso Campos vazios*/}
      <ModalUserFeedback
        open={showMessageEmptyFields}
        onClose={() => setShowMessageEmptyFields(false)}
        style={modalStyle}
        usage={ModalUsage.alert}
      >
        Verifique se todos os campos estão preenchidos.
      </ModalUserFeedback>
      {/* Modal de aviso Files */}
      <ModalUserFeedback
        open={showMessageLimitFiles}
        onClose={() => setShowMessageLimitFiles(false)}
        style={modalStyle}
        usage={ModalUsage.alert}
      >
        Limite de arquivos atingido!!
      </ModalUserFeedback>
    </S.Modal>
  );
};

export default FormProduto;
