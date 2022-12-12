import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BannersApi from "../../../../../api/Banners";
import { Banners, IActionButtons, IColumns, IPageRequest } from "../../../../../types/common.types";

const useMenuBanners = () => {
    
    const { id } = useParams();
    const { listBanners } = BannersApi();
    const navigate = useNavigate();
    const actions: IActionButtons = {
        view: true,
        edit: true,
        disable: false,
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
    const [list, setList] = useState<Banners[]>([]);
    const columns:IColumns[] = [
        {
            title: 'Nome',
            name: 'nome',
        },
        {
            title: 'Tipo',
            name: 'tipo',
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

    useEffect(() => {
        return () => { setList([]); setPageable({ ...pageable, currentPage: 0 }) };
    }, [id, location.pathname]);
    
    return { actions, columns, list, loading, hasMore, setPageable, navigate };
};

export default useMenuBanners;
