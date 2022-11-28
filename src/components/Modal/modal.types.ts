export interface IModalProps {
  modalUsage: ModalUsage,
  open: boolean,
}

export enum ModalUsage{
  PRODUTOS = "PRODUTOS",
  CATEGORIAS = "CATEGORIAS",
  MODELOS = "MODELOS",
  FORNECEDORES = "FORNECEDORES",
  MARCAS = "MARCAS"
}
