import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import ModelosApi from "../../../../../api/Modelos";
import { Modelos, IColumns, IPageRequest } from "../../../../../types/common.types";

const useMenuModelos = () => {
    const { listModelos } = ModelosApi();
    const navigate = useNavigate();
    const [pageable, setPageable] = useState<IPageRequest>(
        {
            filter: '',
            pageSize: 3,
            currentPage: 0,
        }
    );
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [list, setList] = useState<Modelos[]>([]);
    const columns:IColumns[] = [
        {
            title: 'Nome',
            name: 'nome',
        },
    ];

    useEffect(() => {
        listModelos(pageable)
            .then((response) => {
                setHasMore(response.content.length > 0)
                return setList([...list, ...response.content]);   
            })
            .finally (() => {
                return setLoading(false);
            });
    }, [pageable]);

    return { columns, list, loading, hasMore, setPageable, navigate };
};

export default useMenuModelos;
