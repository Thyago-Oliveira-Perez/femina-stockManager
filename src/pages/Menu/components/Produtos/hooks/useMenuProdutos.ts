import { IActionButtons, IPageResponse, IProdutoResponse } from './../../../../../types/common.types';
import { useEffect } from 'react';
import { useState } from 'react';
import ProdutoApi from '../../../../../api/Produtos';
import { IColumns, IPageRequest } from '../../../../../types/common.types';
import { useNavigate } from 'react-router-dom';

const useMenuProdutos = () => {

    const { listProdutos } = ProdutoApi();
    const navigate = useNavigate();
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
    const [list, setList] = useState<IProdutoResponse[]>([]);
    const [viewList, setViewList] = useState<'list' | 'grid'>('list');
    const columns:IColumns[] = [
        {
            title: 'Foto',
            name: 'image',
        },
        {
            title: 'Nome',
            name: 'nome',
        },
        {
            title: 'Preço',
            name: 'valor',
        },
        {
            title: 'Marca',
            name: 'marca'
        },
    ];
    
    const handleChangeViewList = (item: 'list' | 'grid') => {
        setList([]);
        setPageable({...pageable, currentPage: 0});
        if(item === 'grid') {
            return setViewList('grid');
        }
        return setViewList('list');    
    };
    
    useEffect(() => {
        listProdutos(pageable)
            .then((response) => {
                setHasMore(response.content.length > 0)
                return setList([...list, ...response.content]);   
            })
            .finally (() => {
                return setLoading(false);
            });
    }, [pageable]);

    return { 
        actions, 
        columns, 
        viewList, 
        list, 
        loading, 
        hasMore, 
        setPageable, 
        navigate, 
        handleChangeViewList 
    };
};

export default useMenuProdutos;
