export interface INumberFieldModal {
  label: string 
  value: string | number
  setValue: React.Dispatch<React.SetStateAction<string | number>>
}