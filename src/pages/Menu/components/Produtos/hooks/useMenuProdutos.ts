import { IProdutoResponse } from './../../../../../types/common.types';
import { useEffect } from 'react';
import { useState } from 'react';
import ProdutoApi from '../../../../../api/Produtos';
import { IColumns, IPageRequest } from '../../../../../types/common.types';
import { useNavigate } from 'react-router-dom';

const useMenuProdutos = () => {

    const { listProdutos } = ProdutoApi();
    const navigate = useNavigate();
    const [pageable, setPageable] = useState<IPageRequest>(
        {
            filter: '',
            pageSize: 5,
            currentPage: 0,
        }
    );
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
        if(item === 'grid') {
            return setViewList('grid');
        }
        return setViewList('list');    
    };
    
    useEffect(() => {
        listProdutos(pageable)
            .then((response) => {
                setList(response.content);
            });
    }, [pageable]);

    return { columns, viewList, list, navigate, handleChangeViewList };
};

export default useMenuProdutos;
