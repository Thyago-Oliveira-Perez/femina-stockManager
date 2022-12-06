import * as S from './buttonInsert.styles';
import AddIcon from '@mui/icons-material/Add';

const ButtonInsert = (props: any) => {
    return (
        <S.AreaButton 
            onClick={props.onClick}
            style={props.style}
        >
            <AddIcon />
            <S.StyledButton
                type={'button'}
                disabled={props.disabled}
                onClick={props.onClick}
            >
                {props.children}
            </S.StyledButton>
        </S.AreaButton>
    );
};

export default ButtonInsert;
