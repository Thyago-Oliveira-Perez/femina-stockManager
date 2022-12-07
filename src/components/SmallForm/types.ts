import { SelectFieldLabels } from "../Modal/Components/SelectField/selectfield.types";

export interface SmallFormProps {
  value: string;
  name: string;
  onChange: (e: any) => void;
  label: SelectFieldLabels;
  hideForm: React.Dispatch<React.SetStateAction<boolean>>;
  endpoint: Endpoints;
}

export enum Endpoints {
  CATEGORIA = "categorias",
  MODELO = "modelos",
  MARCA = "marcas"
}
