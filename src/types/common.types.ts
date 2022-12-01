export interface Marcas {
  id: number;
  nome: string;
}
export interface Modelos {
  id: number;
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
  COLECAO = "COLECAO"
}
export interface Categorias {
  id: number;
  nome: string;
}
export interface Fornecedores {
  id: number;
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
  id?: number;
  nome: string;
  imagens: string;
  tipoDeBanner: TipoDeBanner;
  nomeUsuario: string;
  idUsuario: number;
  imageNames: string[];
}

export interface IProdutoResponse {
  id: number;
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
  imagemUrl: string;
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
  content: any[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
}

export interface IActionControl {
  id: number | null;
  mode: string;
}
