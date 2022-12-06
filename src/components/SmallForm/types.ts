import { SelectFieldLabels } from "../Modal/Components/SelectField/selectfield.types";

export interface SmallFormProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: SelectFieldLabels;
  hideForm: React.Dispatch<React.SetStateAction<boolean>>;
  endpoint: Endpoints;
}

export enum Endpoints {
  CATEGORIA = "categorias",
  MODELO = "modelos",
  MARCA = "marcas"
}
