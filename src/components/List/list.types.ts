import { Dispatch, SetStateAction } from 'react';
import { IActionButtons, IColumns, IPageRequest } from '../../types/common.types';

export interface IListProps {
    actions: IActionButtons;
    columns: IColumns[];
    items: any;
    mode: 'grid' | 'list';
    loading: boolean;
    hasMore: boolean;
    setNewPage: Dispatch<SetStateAction<IPageRequest>>;
}
