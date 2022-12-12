import { FormFunction } from "../FormProduto/types";

export interface FornecedorRequest {
  id?: string;
  nome: string;
  cnpj: string;
  telefone: string;
  email: string;
}

export interface IFornecedor {
  id?: string;
  nome: string;
  cnpj: string;
  telefone: string;
  email: string;
}

export interface IFormFornecedorProps {
  mode?: FormFunction;
  id?: string;
}

export interface IUseFormFornecedorProps {
  mode?: FormFunction;
  id?: string;
}

export interface IValidationFornecedor {
  nome: {
    required: boolean;
  };
  cnpj: {
    pattern: string;
    required: boolean;
  };
  telefone: {
    pattern: string;
    required: boolean;
  };
  email: {
    pattern: string;
    required: boolean;
  };
}
