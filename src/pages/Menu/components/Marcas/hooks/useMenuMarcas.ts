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
            pageSize: 5,
            currentPage: 0,
        }
    );
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
                setList(response.content);
            });
    }, [pageable]);

    return { columns, list, navigate };
};

export default useMenuMarcas;
