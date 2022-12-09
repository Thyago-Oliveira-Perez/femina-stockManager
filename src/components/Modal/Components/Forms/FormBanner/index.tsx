import * as S from "./styles";
import { Button } from "@mui/material";
import { SelectFieldLabels, TextFieldLables } from "../../SelectField/selectfield.types";
import TextFieldModal from "../../TextField";
import SelectField from "../../SelectField";
import { IFormBannerProps } from "./types";
import useFormBanner from "./hooks/useFormBanner";
import ImageUpload from "../../../../ImageUpload";
import { SetStateAction } from "react";
import { actionFile } from "../FormProduto/types";

const FormBanner = (props: IFormBannerProps) => {

  const { 
    banner, 
    images,
    options,
    handleChange, 
    handleCancel, 
    handleRegister,
    handleFileChange
  } = useFormBanner({mode: props.mode, id: props.id});

  return(
    <>
      <S.Modal>
        <S.Tittle>
          <h3>Novo Banner</h3>
        </S.Tittle>
        <S.Form>
          <TextFieldModal
            value={banner.nome}
            name={TextFieldLables.NOME.toLowerCase()}
            onChange={(e) => handleChange(e)}
            label={TextFieldLables.NOME}
          />
          <SelectField
            label={SelectFieldLabels.TYPEBANNER}
            value={banner.tipo}
            name={SelectFieldLabels.TYPE.toLowerCase()}
            onChange={(e) => handleChange(e)}
            options={options}
          />      
        </S.Form>
        <S.InputImageArea>
          <ImageUpload 
            images={images} 
            setShowMessageLimitFiles={() => null} 
            handleFile={
              (e: any, action: actionFile, index?: number) => 
              handleFileChange(e, action, index)
            } 
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

export default FormBanner;