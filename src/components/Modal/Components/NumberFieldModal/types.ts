export interface INumberFieldModal {
  label: string ;
  value: number;
  onChange: (e: any) => void;
  name: string;
  disabled?: boolean;
}