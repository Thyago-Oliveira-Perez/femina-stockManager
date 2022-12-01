import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import FornecedoresApi from "../../../../../api/Fornecedores";
import { IColumns, IFornecedorResponse, IPageRequest } from "../../../../../types/common.types";

const useMenuFornecedores = () => {
    const { listFornecedores } = FornecedoresApi();
    const navigate = useNavigate();
    const [pageable, setPageable] = useState<IPageRequest>(
        {
            filter: '',
            pageSize: 5,
            currentPage: 0,
        }
    );
    const [list, setList] = useState<IFornecedorResponse[]>([]);
    const columns:IColumns[] = [
        {
            title: 'Nome',
            name: 'name',
        },
        {
            title: 'Email',
            name: 'email',
        },
        {
            title: 'Telefone',
            name: 'telefone',
        },
    ];

    useEffect(() => {
        listFornecedores(pageable)
            .then((response) => {
                setList(response.content);
            });
    }, [pageable]);

    return { columns, list, navigate };
};

export default useMenuFornecedores;
