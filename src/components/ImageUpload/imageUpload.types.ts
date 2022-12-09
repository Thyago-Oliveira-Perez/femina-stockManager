import { actionFile } from "../Modal/Components/Forms/FormProduto/types";

export interface IImageUploadProps {
    images: any[];
    setShowMessageLimitFiles: React.Dispatch<React.SetStateAction<boolean>>;
    handleFile: (e: any, action: actionFile, index?: number) => void;
}