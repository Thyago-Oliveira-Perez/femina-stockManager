import * as S from "./styles";
import { Button } from "@mui/material";
import { SelectFieldLabels, TextFieldLables } from "../../SelectField/selectfield.types";
import TextFieldModal from "../../TextField";
import SelectField from "../../SelectField";
import { IFormBannerProps } from "./types";
import useFormBanner from "./hooks/useFormBanner";
import ImageUpload from "../../../../ImageUpload";
import { actionFile, FormFunction } from "../FormProduto/types";
import ModalUserFeedback from "../../../../ModalUserFeedback";
import { ModalUsage } from "../../../../ModalUserFeedback/types";

const FormBanner = (props: IFormBannerProps) => {

  const { id, mode } = props;
  const {
    banner,
    images,
    options,
    modalStyle,
    showMessageEmptyFields,
    handleChange,
    handleCancel,
    handleRegister,
    handleFileChange,
    setShowMessageEmptyFields,
    showMessageLimitFiles,
    setShowMessageLimitFiles
  } = useFormBanner({ mode: mode, id: id });

  return (
    <>
      <S.Modal>
        <S.Tittle>
          {mode === FormFunction.new && <h3>Novo Banner</h3>}
          {mode === FormFunction.view && <h3>Visualizar Banner</h3>}
          {mode === FormFunction.edit && <h3>Editar Banner</h3>}
        </S.Tittle>
        <S.Form>
          <TextFieldModal
            value={banner.nome}
            name={TextFieldLables.NOME.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.NOME}
            disabled={mode === FormFunction.view}
          />
          <SelectField
            label={SelectFieldLabels.TYPEBANNER}
            value={banner.tipo}
            name={SelectFieldLabels.TYPE.toLowerCase()}
            onChange={(e) => handleChange(e)}
            options={options}
            disabled={mode === FormFunction.view}
          />
        </S.Form>
        <S.InputImageArea>
          <ImageUpload
            images={images}
            setShowMessageLimitFiles={setShowMessageLimitFiles}
            handleFile={
              (e: any, action: actionFile, index?: number) =>
                handleFileChange(e, action, index)
            }
            mode={props.mode}
            disabled={mode === FormFunction.view}
          />
        </S.InputImageArea>
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
                Salvar
              </Button>
              : null
          }
        </S.ButtonsSection>
        <ModalUserFeedback
          open={showMessageEmptyFields}
          onClose={() => setShowMessageEmptyFields(false)}
          style={modalStyle}
          usage={ModalUsage.alert}
        >
          Verifique se todos os campos est??o preenchidos.
        </ModalUserFeedback>
        <ModalUserFeedback
          open={showMessageLimitFiles}
          onClose={() => setShowMessageLimitFiles(false)}
          style={modalStyle}
          usage={ModalUsage.alert}
        >
          Limite de arquivos atingido!!
        </ModalUserFeedback>
      </S.Modal>
    </>
  )
}

export default FormBanner;