import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import FornecedoresApi from "../../../../../api/Fornecedores";
import { IActionButtons, IColumns, IFornecedorResponse, IPageRequest } from "../../../../../types/common.types";

const useMenuFornecedores = () => {

    const { listFornecedores } = FornecedoresApi();
    const navigate = useNavigate();
    const actions: IActionButtons = {
        view: true,
        edit: true,
        disable: true,
    };
    const [pageable, setPageable] = useState<IPageRequest>(
        {
            filter: '',
            pageSize: 4,
            currentPage: 0,
        }
    );
    const [loading, setLoading] = useState<boolean>(true);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [list, setList] = useState<IFornecedorResponse[]>([]);
    const columns:IColumns[] = [
        {
            title: 'Nome',
            name: 'nome',
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
                setHasMore(response.content.length > 0)
                return setList([...list, ...response.content]);   
            })
            .finally (() => {
                return setLoading(false);
            });
    }, [pageable]);

    return { actions, columns, list, loading, hasMore, setPageable, navigate };
};

export default useMenuFornecedores;
