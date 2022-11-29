import { Categoria } from "../FormCategoria/types";
import { Fornecedor } from "../FormFornecedor/types";
import { Marca } from "../FormMarca/types";
import { Modelo } from "../FormModelo/types";

export interface IFromProdutoProps {
  isModalOpen: boolean;
  isToCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  productId?: string;
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
  view,
  edit,
}

export interface INewProdutoResponse {}
