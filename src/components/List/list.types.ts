import { Dispatch, SetStateAction } from 'react';
import { IColumns, IPageRequest } from '../../types/common.types';

export interface IListProps {
    columns: IColumns[];
    items: any;
    mode: 'grid' | 'list';
    loading: boolean;
    hasMore: boolean;
    setNewPage: Dispatch<SetStateAction<IPageRequest>>;
}
