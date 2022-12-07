export interface ITextFieldModal{
 label: string
 name: string; 
 value: string
 onChange: (e: any) => void; 
 //React.Dispatch<React.SetStateAction<string>>
}