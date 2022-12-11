export interface Marcas {
  id?: string;
  nome: string;
}
export interface Modelos {
  id?: string;
  nome: string;
}
export enum Tamanhos {
  PP = "PP",
  P = "P",
  M = "M",
  G = "G",
  GG = "GG",
}

export enum TipoDeBanner {
  DESTAQUE = "DESTAQUE",
  COLECAO = "COLECAO",
}
export interface Categorias {
  id?: string;
  nome: string;
}
export interface Fornecedores {
  id?: string;
  nome: string;
  cnpj: string;
  telefone: string;
  email: string;
}
export interface Cores {
  id: number;
  nome: string;
}

export interface Banners {
  id?: string;
  nome: string;
  imagens: string;
  tipoDeBanner: TipoDeBanner;
  nomeUsuario: string;
  idUsuario: number;
  imageNames: string[];
}

export interface IProdutoResponse {
  id: string;
  nome: string;
  codigo: string;
  valor: string;
  marca: Marcas;
  categoria: Categorias;
  modelo: Modelos[];
  fornecedor: Fornecedores;
  tamanho: Tamanhos;
  cor: string;
  descricao?: string;
  imagem: string;
  destaque: boolean;
  imageNames: string[];
}

export interface IFornecedorResponse {
  id?: number;
  name: string;
  cnpj: string;
  telefone: string;
  email: string;
}

export interface IColumns {
  title: string;
  name: string;
  maxSize?: number;
}

export interface IPageRequest {
  filter: string;
  currentPage: number;
  pageSize: number;
  sortField?: string;
}

export interface IPageResponse<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
}

export interface IActionButtons {
  view: boolean;
  edit: boolean;
  disable: boolean;
}
