import { Box, Modal as MaterialUiModal, Button, Checkbox } from "@mui/material";
import NumberFieldModal from "../../NumberFieldModal";
import SelectField from "../../SelectField";
import {
  SelectFieldLabels,
  TextFieldLables,
} from "../../SelectField/selectfield.types";
import TextFieldModal from "../../TextField";
import { actionFile, IFromProdutoProps } from "./types";
import * as S from "./styles";
import upload_image from "../../../../../assets/upload_imagem.svg";
import arrastar_imagem from "../../../../../assets/arrastar_imagem.svg";
import useFormProduto from "./hooks/useFormProduto";
import { RiDeleteBin5Fill } from "react-icons/ri";
import BlockIcon from "@mui/icons-material/Block";
import ModalUserFeedback from "../../../../ModalUserFeedback";
import { ModalUsage } from "../../../../ModalUserFeedback/types";

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
    inputRef,
    showMessageEmptyFields,
    setShowMessageEmptyFields,
    modalStyle,
    handleClick,
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
        <h3>Novo Produto</h3>
      </S.Tittle>
      <S.Section1>
        <S.Field>
          <TextFieldModal
            value={produto.nome}
            name={TextFieldLables.NOME.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.NOME}
          />
        </S.Field>
        <S.Field>
          <TextFieldModal
            value={produto.cor}
            name={TextFieldLables.COR.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.COR}
          />
        </S.Field>
        <S.Field>
          <TextFieldModal
            value={produto.codigo}
            name={TextFieldLables.CODIGO.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.CODIGO}
          />
        </S.Field>
        <S.Field>
          <SelectField
            label={SelectFieldLabels.MARCA}
            value={produto.marca}
            name={SelectFieldLabels.MARCA.toLowerCase()}
            onChange={(e) => handleChange(e)}
            options={marcasOptions}
          />
        </S.Field>
        <S.Field>
          <SelectField
            label={SelectFieldLabels.MODELO}
            value={produto.modelo}
            name={SelectFieldLabels.MODELO.toLowerCase()}
            onChange={(e) => handleChange(e)}
            options={modelosOptions}
          />
        </S.Field>
        <S.Field>
          <SelectField
            label={SelectFieldLabels.TAMANHO}
            value={produto.tamanho}
            name={SelectFieldLabels.TAMANHO.toLowerCase()}
            onChange={(e) => handleChange(e)}
            options={tamanhos}
          />
        </S.Field>
        <S.Field>
          <SelectField
            label={SelectFieldLabels.CATEGORIA}
            value={produto.categoria}
            name={SelectFieldLabels.CATEGORIA.toLowerCase()}
            onChange={(e) => handleChange(e)}
            options={categoriasOptions}
          />
        </S.Field>
        <S.Field>
          <SelectField
            label={SelectFieldLabels.FORNECEDOR}
            value={produto.fornecedor}
            name={SelectFieldLabels.FORNECEDOR.toLowerCase()}
            onChange={(e) => handleChange(e)}
            options={fornecedoresOptions}
          />
        </S.Field>
        <S.Field>
          <NumberFieldModal
            value={produto.valor}
            name={TextFieldLables.VALOR.toLowerCase()}
            onChange={(e) => handleChangeNumber(e)}
            label={TextFieldLables.PRECO}
          />
        </S.Field>
      </S.Section1>
      <S.Section2>
        <div style={{ width: "100%" }}>
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
            }}
            onChange={(e) => handleChange(e)}
            placeholder={TextFieldLables.DESCRICAO}
          ></textarea>
          {/* Upload file */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "97.2%",
              maxWidth: "97.2%",
              margin: "20px 20px",
              height: "120px",
              border: "dotted 1px #7A0000",
              cursor: "pointer",
              minHeight: "200px",
            }}
            onClick={() => {
              handleClick();
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <img style={{ margin: "10px 0px" }} src={upload_image} alt="" />
              <img src={arrastar_imagem} alt="" />
              <input
                style={{ display: "none" }}
                ref={inputRef}
                type="file"
                onChange={(e) => handleFileChange(e, actionFile.add)}
              />
            </div>
          </div>
          {images.length ? (
            <div
              style={{
                minWidth: "97.2%",
                maxWidth: "97.2%",
                margin: "20px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "auto",
                border: "1.5px solid #9B4A46",
              }}
            >
              <h3
                style={{
                  color: "#9B4A46",
                  fontSize: "20px",
                  margin: "20px 0 10px 0",
                }}
              >
                Arquivos selecionados
              </h3>
              <hr
                style={{
                  borderColor: "blue",
                  width: "20%",
                  border: "1px solid #9B4A46",
                }}
              />
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "20px",
                  margin: "10px 0",
                }}
              >
                {images.map((e, index) => {
                  return (
                    <li
                      style={{
                        margin: "10px 0",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          border: "1.5px solid #9B4A46",
                          borderRadius: "8px",
                          padding: "10px",
                        }}
                      >
                        <p>{e.name}</p>
                        <S.ButtonAreas>
                          <S.ButtonActions
                            color={"#F05555"}
                            onClick={(e) =>
                              handleFileChange(e, actionFile.remove, index)
                            }
                          >
                            <RiDeleteBin5Fill size={17} />
                          </S.ButtonActions>
                        </S.ButtonAreas>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
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
        <Button
          variant="contained"
          style={{ backgroundColor: "#118DE8" }}
          onClick={() => handleRegister()}
        >
          Cadastrar
        </Button>
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
