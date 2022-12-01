import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BannersApi from "../../../../../api/Banners";
import { Banners, IColumns, IPageRequest } from "../../../../../types/common.types";

const useMenuBanners = () => {
    const { listBanners } = BannersApi();
    const navigate = useNavigate();
    const [pageable, setPageable] = useState<IPageRequest>(
        {
            filter: '',
            pageSize: 5,
            currentPage: 0,
        }
    );
    const [list, setList] = useState<Banners[]>([]);
    const columns:IColumns[] = [
        {
            title: 'Nome',
            name: 'nome',
        },
        {
            title: 'Tipo',
            name: 'tipoDeBanner',
        },
        {
            title: 'Cadastrado por',
            name: 'nomeUsuario',
        }
    ];
    
    useEffect(() => {
        listBanners(pageable)
            .then((response) => {
                setList(response.content);
            });
    }, [pageable]);

    return { columns, list, navigate };
};

export default useMenuBanners;
