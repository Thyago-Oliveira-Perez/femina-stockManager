import { IColumns } from '../../types/common.types';

export interface IListProps {
    columns: IColumns[];
    items: any;
    mode: 'grid' | 'list';
}
