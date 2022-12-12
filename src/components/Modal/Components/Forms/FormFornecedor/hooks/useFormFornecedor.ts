import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FornecedoresApi from "../../../../../../api/Fornecedores";
import { FormFunction } from "../../FormProduto/types";
import { IFornecedor, IUseFormFornecedorProps, IValidationFornecedor } from "../types";

const useFormFornecedor = (props: IUseFormFornecedorProps) => {

    const { insertFornecedor, getFornecedores, updateFornecedor } = FornecedoresApi();
    const navigate = useNavigate();
    const [message, setMessage] = useState<string>("");
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [fornecedor, setFornecedor] = useState<IFornecedor>(
        {
            nome: "",
            email: "",
            cnpj: "",
            telefone: "",
        }
    );

    const validations: IValidationFornecedor = {
        nome: {
            required: true,
        },
        cnpj: {
            pattern: "[0-9]{2}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}$",
            required: true
        },
        telefone: {
            pattern: "[0-9]{11}$",
            required: true
        },
        email: {
            pattern: "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])$",
            required: true
        }
    };

    /**
   * style do modal de aviso
   */
    const modalStyle = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "30%",
        height: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.paper",
        overflow: "auto",
        boxShadow: 24,
        p: 4,
        borderRadius: 4,
    };

    useEffect(() => {
        if (props.id) {
            getFornecedores(props.id).then((response) => {
                setFornecedor(response);
            })
        }
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFornecedor({ ...fornecedor, [event.target.name]: event.target.value })
    };

    const handleCancel = () => {
        navigate("../")
    };

    const handleValidate = (fornecedor: IFornecedor) => {
        let valid = true;

        Object.keys(validations).forEach((key: string) => {
            if ((validations as any)[key]?.pattern
                && !RegExp((validations as any)[key]?.pattern).test((fornecedor as any)[key])
            ) {
                valid = false;
                setMessage("Verifique se o campo é válido");
            }
            if ((validations as any)[key]?.required && !(fornecedor as any)[key]) {
                valid = false;
                setMessage("Verifique se todos os campos estão preenchidos.");
            }
        });

        return valid;
    };

    const handleRegister = () => {
        if (handleValidate(fornecedor)) {
            if (props.mode === FormFunction.new) {
                insertFornecedor(fornecedor).then((response) => {
                    toast.success(response);
                    navigate("../");
                });
            }
            if (props.mode === FormFunction.edit) {
                if (props.id) {
                    updateFornecedor(fornecedor, props.id).then(() => {
                        toast.success("Editado Com Sucesso!");
                        navigate("../");
                    });
                }
            }
        } else {
            setShowMessage(true)
        }
    };

    return {
        fornecedor,
        modalStyle,
        message,
        showMessage,
        handleChange,
        handleCancel,
        handleRegister,
        setShowMessage
    };
};

export default useFormFornecedor;
