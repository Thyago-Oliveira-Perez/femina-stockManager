import { Fornecedor } from "../FormFornecedor/types";

export interface Categoria {
  id: number;
  atualizado?: Date;
  isActive: boolean;
  nome: string;
}

export interface Marca {
  id: number;
  atualizado?: Date;
  isActive: boolean;
  nome: string;
}

export interface Modelo {
  id: number;
  atualizado?: Date;
  isActive: boolean;
  nome: string;
}

export interface IFromProdutoProps {
  isModalOpen: boolean;
  isToCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  productId?: number;
  function?: FormFunction;
}

export interface INewProduto {
  atualizado?: Date;
  isActive: true;
  codigo: string;
  nome: string;
  quantidade: number;
  valor: number;
  categoria: Categoria;
  modelo: Modelo[];
  fornecedor: Fornecedor;
  marca: Marca;
  cor: string;
  tamanho: string;
  descricao: string;
  destaque: boolean;
  imagem: any;
}

export enum FormFunction {
  new,
  view,
  edit,
}

export interface INewProdutoResponse {
  
}
