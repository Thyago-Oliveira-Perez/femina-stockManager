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

export interface Fornecedor {
  id?: string;
  atualizado?: Date;
  isActive?: boolean;
  nome: string;
  cnpj: string;
  telefone: string;
  email: string;
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
  valor: number;
  categoria: Categoria | null;
  modelo: Modelo | null;
  fornecedor: Fornecedor | null;
  marca: Marca | null;
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
