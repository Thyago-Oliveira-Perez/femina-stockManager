import { ReactNode } from 'react';

export interface IButtonInsert {
    children: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}
