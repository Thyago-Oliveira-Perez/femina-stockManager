import { Categorias, Tamanhos } from "../../../../types/common.types"

export interface ISelectFieldProps{
  label: SelectFieldLabels
  values: any[]
}


export enum SelectFieldLabels{
  MARCA = "MARCA",
  MODELO = "MODELO",
  TAMANHO = "TAMANHO",
  CATEGORIA = "CATEGORIA",
  FORNECEDOR = "FORNECEDOR",
  COR = "COR",
}

export enum TextFieldLables{
  NOME = "NOME",
  QUANTIDADE = "QUANTIDADE",
  CODIGO = "CODIGO",
  PRECO = "PRECO",
  COR = "COR"
}