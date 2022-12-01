import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import CategoriasApi from "../../../../../api/Categorias";
import { Categorias, IColumns, IPageRequest } from "../../../../../types/common.types";

const useMenuCategorias = () => {
    const { listCategorias } = CategoriasApi();
    const navigate = useNavigate();
    const [pageable, setPageable] = useState<IPageRequest>(
        {
            filter: '',
            pageSize: 5,
            currentPage: 0,
        }
    );
    const [list, setList] = useState<Categorias[]>([]);
    const columns:IColumns[] = [
        {
            title: 'Nome',
            name: 'nome',
        },
    ];
    
    useEffect(() => {
        listCategorias(pageable)
            .then((response) => {
                setList(response.content);
            });
    }, [pageable]);

    return { columns, list, navigate };
};

export default useMenuCategorias;
