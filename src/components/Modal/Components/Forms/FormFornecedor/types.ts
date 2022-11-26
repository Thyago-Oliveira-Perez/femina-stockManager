export interface Fornecedor {
  id: number;
  atualizado?: Date;
  isActive: boolean;
  name: string;
  cnpj: string;
  telefone: string;
  email: string;
}