export interface Categoria {
  id: string;
  atualizado?: Date;
  isActive: boolean;
  nome: string;
}

export interface Marca {
  id: string;
  atualizado?: Date;
  isActive: boolean;
  nome: string;
}

export interface Modelo {
  id: string;
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
  productId?: string;
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

export enum actionFile {
  add,
  remove,
}

export interface PreviewProps {
  src?: string;
}

export interface IValidationProduto {
  isActive: {
    required: boolean;
  };
  codigo: {
    required: boolean;
  };
  nome: {
    required: boolean;
  };
  valor: {
    required: boolean;
  };
  categoria: {
    required: boolean;
  };
  modelo: {
    required: boolean;
  };
  fornecedor: {
    required: boolean;
  };
  marca: {
    required: boolean;
  };
  cor: {
    required: boolean;
  };
  tamanho: {
    required: boolean;
  };
  descricao: {
    required: boolean;
  };
  destaque: {
    required: boolean;
  };
}
