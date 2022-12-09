import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FornecedoresApi from "../../../../../../api/Fornecedores";
import { FornecedorRequest, IUseFormFornecedorProps } from "../types";

const useFormFornecedor = (props: IUseFormFornecedorProps) => {
    const { insertFornecedor } = FornecedoresApi();
    const navigate = useNavigate();
    const [fornecedor, setFornecedor] = useState<FornecedorRequest>(
        {
            nome: "", 
            email: "",
            cnpj: "",
            telefone: "",
        }
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFornecedor({...fornecedor, [event.target.name]: event.target.value})
    };

    const handleCancel = () => {
        navigate("../")
    };

    const handleRegister = () => {
        insertFornecedor(fornecedor).then((response) => {
            toast.success(response);
        }).catch((error) => {
            
        })
    };

    return { fornecedor, handleChange, handleCancel, handleRegister };
};

export default useFormFornecedor;
