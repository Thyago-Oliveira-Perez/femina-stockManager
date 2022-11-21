export interface Marcas {
  id: number,
  nome: string
}
export interface Modelos {
  id: number,
  nome: string
}
export enum Tamanhos {
  PP = "PP",
  P = "P",
  M = "M",
  G = "G",
  GG = "GG",
}
export interface Categorias {
  id: number,
  nome: string
}
export interface Fornecedores {
  id: number,
  nome: string,
  cnpj: string,
  telefone: string,
  email: string
}
export interface Cores {
  id: number,
  nome: string
}

export interface IProdutoResponse {
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

export interface IColumns {
  title: string;
  name: string;
  maxSize?: number;
}
