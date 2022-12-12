import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import FornecedoresApi from "../../../../../api/Fornecedores";
import { IActionButtons, IColumns, IFornecedorResponse, IPageRequest } from "../../../../../types/common.types";
import toast from 'react-hot-toast';

const useMenuFornecedores = () => {

    const { id, mode } = useParams();
    const { listFornecedores, disableFornecedores } = FornecedoresApi();
    const navigate = useNavigate();
    const location = useLocation();
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
    const columns: IColumns[] = [
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
            setHasMore(response.content.length > 0);
            return setList([...list, ...response.content]);
        })
        .finally(() => {
            return setLoading(false);
        });
    }, [pageable]);

    useEffect(() => {
        if (mode === 'disable' && id) {
            disableFornecedores(id).then((response) => {
                toast.success(response);
                setList([]);
                setPageable({ ...pageable, currentPage: 0 });
                return navigate('./');
            });
        }
        return () => { setList([]); setPageable({ ...pageable, currentPage: 0 }) };
    }, [id, location.pathname]);

    return { actions, columns, list, loading, hasMore, setPageable, navigate };
};

export default useMenuFornecedores;
