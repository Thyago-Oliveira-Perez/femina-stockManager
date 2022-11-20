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
  name: string,
  cnpj: string,
  telefone: string,
  email: string
}
export interface Cores {
  id: number,
  nome: string
}