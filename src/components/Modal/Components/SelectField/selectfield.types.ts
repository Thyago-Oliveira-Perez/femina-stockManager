import { Categorias, Tamanhos } from "../../../../types/common.types";

export interface ISelectFieldProps {
  label: SelectFieldLabels;
  options: any[];
  value: any;
  name: string;
  onChange: (e: any) => void;
}

export enum SelectFieldLabels {
  MARCA = "MARCA",
  MODELO = "MODELO",
  TAMANHO = "TAMANHO",
  CATEGORIA = "CATEGORIA",
  FORNECEDOR = "FORNECEDOR",
  COR = "COR",
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