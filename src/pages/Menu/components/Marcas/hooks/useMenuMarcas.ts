import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import MarcasApi from "../../../../../api/Marcas";
import { Marcas, IColumns, IPageRequest } from "../../../../../types/common.types";

const useMenuMarcas = () => {
    const { listMarcas } = MarcasApi();
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
    const [list, setList] = useState<Marcas[]>([]);
    const columns:IColumns[] = [
        {
            title: 'Nome',
            name: 'nome',
        },
    ];

    useEffect(() => {
        listMarcas(pageable)
            .then((response) => {
                setHasMore(response.content.length > 0)
                return setList([...list, ...response.content]);   
            })
            .finally (() => {
                return setLoading(false);
            });
    }, [pageable]);

    return { columns, list,loading, hasMore, setPageable, navigate };
};

export default useMenuMarcas;
