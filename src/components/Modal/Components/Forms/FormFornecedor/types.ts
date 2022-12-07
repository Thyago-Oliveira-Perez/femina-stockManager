export interface FornecedorRequest {
  id?: string;
  nome: string;
  cnpj: string;
  telefone: string;
  email: string;
}

export interface IFormFornecedorProps {
  mode: string;
  id: string;
}

export interface IUseFormFornecedorProps {
  mode: string;
  id: string;
}