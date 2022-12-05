import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BannersApi from "../../../../../api/Banners";
import { Banners, IActionButtons, IColumns, IPageRequest } from "../../../../../types/common.types";

const useMenuBanners = () => {

    const { listBanners } = BannersApi();
    const navigate = useNavigate();
    const actions: IActionButtons = {
        view: true,
        edit: true,
        disable: true,
    };
    const [pageable, setPageable] = useState<IPageRequest>(
        {
            filter: '',
            pageSize: 3,
            currentPage: 0,
        }
    );
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(false);
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
                setHasMore(response.content.length > 0)
                return setList([...list, ...response.content]);   
            })
            .finally (() => {
                return setLoading(false);
            });
    }, [pageable]);

    return { actions, columns, list, loading, hasMore, setPageable, navigate };
};

export default useMenuBanners;
