export interface ITextFieldModal{
 label: string
 name: string; 
 value: string
 onChange: (e: any) => void; 
 disabled?: boolean;
 //React.Dispatch<React.SetStateAction<string>>
}