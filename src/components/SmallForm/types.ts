import { SelectFieldLabels } from "../Modal/Components/SelectField/selectfield.types";

export interface SmallFormProps {
  value: any;
  name: string;
  onChange: (e: any) => void;
  label: SelectFieldLabels;
  hideForm: any;
  endpoint: Endpoints;
  action: SmallFormActions;
}

export enum SmallFormActions {
  add,
  edit,
}

export enum Endpoints {
  CATEGORIA = "categorias",
  MODELO = "modelos",
  MARCA = "marcas",
}
