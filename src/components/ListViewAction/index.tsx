import * as S from './listViewAction.styles';
import MenuIcon from '@mui/icons-material/Menu';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import { IListViewProps } from './listViewAction.types';

const ListViewAction = (props: IListViewProps) => {
    return (
        <S.ButtonGroup
            value={props.value}
            exclusive
            onChange={(e, i) => props.onChange(i)}
        >
            <S.ButtonAction value='list' aria-label='list'>
                <MenuIcon />
            </S.ButtonAction>
            <S.ButtonAction value='grid' aria-label='module'>
                <WindowOutlinedIcon />
            </S.ButtonAction>
        </S.ButtonGroup>
    );
};

export default ListViewAction;
