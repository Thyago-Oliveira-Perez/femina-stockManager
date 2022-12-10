import { Categorias, Tamanhos } from "../../../../types/common.types";

export interface ISelectFieldProps {
  label: SelectFieldLabels;
  options: any[];
  value: any;
  name: string;
  onChange: (e: any) => void;
  disabled?: boolean;
}

export enum SelectFieldLabels {
  MARCA = "MARCA",
  MODELO = "MODELO",
  TAMANHO = "TAMANHO",
  CATEGORIA = "CATEGORIA",
  FORNECEDOR = "FORNECEDOR",
  COR = "COR",
  TYPEBANNER = "TIPO DE BANNER",
  TYPE = "TIPO"
}

export enum TextFieldLables {
  NOME = "NOME",
  QUANTIDADE = "QUANTIDADE",
  CODIGO = "CODIGO",
  PRECO = "PRECO",
  COR = "COR",
  DESCRICAO = "DESCRICAO",
  CNPJ = "CNPJ",
  TELEFONE = "TELEFONE",
  EMAIL = "EMAIL",
  VALOR = "VALOR"
}