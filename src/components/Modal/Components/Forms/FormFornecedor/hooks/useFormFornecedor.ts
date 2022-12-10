import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FornecedoresApi from "../../../../../../api/Fornecedores";
import { IFornecedor, IUseFormFornecedorProps } from "../types";

const useFormFornecedor = (props: IUseFormFornecedorProps) => {
    const { insertFornecedor, getFornecedores } = FornecedoresApi();
    const navigate = useNavigate();
    const [fornecedor, setFornecedor] = useState<IFornecedor>(
        {
            nome: "", 
            email: "",
            cnpj: "",
            telefone: "",
        }
    );

    useEffect (() => {
        if (props.id) {
            getFornecedores(props.id).then((response) => {
                setFornecedor(response);
            })
        }
    }, [])

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
