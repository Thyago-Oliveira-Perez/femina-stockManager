import { ChangeEvent } from 'react';

export interface TextFieldProps {
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  defaultValue?: string | number;
  value?: string | number;
  type?:
  | 'text'
  | 'number'
  | 'password'
  | 'email'
  | 'date'
  | 'money'
  | 'telephone'
  | 'cellphone'
  | 'cpf'
  | 'cnpj'
  | 'cep';
  placeholder?: string;
  name?: string | undefined;
}
