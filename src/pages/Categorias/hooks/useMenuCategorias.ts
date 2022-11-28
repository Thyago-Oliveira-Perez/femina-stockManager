import { useEffect, useState } from "react";
import CategoriasApi from "../../../api/Categorias";
import { Categorias, IColumns, IPageRequest } from "../../../types/common.types";

const useMenuCategorias = () => {
    const { listCategorias } = CategoriasApi();

    const [pageable, setPageable] = useState<IPageRequest>(
        {
            filter: '',
            pageSize: 5,
            currentPage: 0,
        }
    );
    const [openModal, setOpenModal] = useState<boolean>(false);
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

    return { columns, openModal, setOpenModal, list };
};

export default useMenuCategorias;
