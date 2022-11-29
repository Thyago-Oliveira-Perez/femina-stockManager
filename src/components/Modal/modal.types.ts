import { FormFunction } from "./Components/Forms/FormProduto/types";

export interface IModalProps {
  modalUsage: ModalUsage,
  open: boolean,
  productId?: number;
  function?: FormFunction;
}

export enum ModalUsage{
  PRODUTOS = "PRODUTOS",
  CATEGORIAS = "CATEGORIAS",
  MODELOS = "MODELOS",
  FORNECEDORES = "FORNECEDORES",
  MARCAS = "MARCAS"
}
