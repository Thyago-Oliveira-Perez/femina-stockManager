import { IProdutoResponse } from './../../../types/common.types';
import { useEffect } from 'react';
import { useState } from 'react';
import ProdutoApi from '../../../api/Produtos';
import { IColumns, IPageRequest } from '../../../types/common.types';

const useMenuProdutos = () => {

    const { listProdutos } = ProdutoApi();

    const [pageable, setPageable] = useState<IPageRequest>(
        {
            filter: '',
            pageSize: 5,
            currentPage: 0,
        }
    );
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [productsList, setProductsList] = useState<IProdutoResponse[]>([]);
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
                setProductsList(response.content);
            });
    }, [pageable]);

    return { columns, viewList, openModal, setOpenModal, productsList, handleChangeViewList };
};

export default useMenuProdutos;
