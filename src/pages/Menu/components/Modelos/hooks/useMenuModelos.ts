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
            pageSize: 5,
            currentPage: 0,
        }
    );
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
                setList(response.content);
            });
    }, [pageable]);

    return { columns, list, navigate };
};

export default useMenuModelos;
