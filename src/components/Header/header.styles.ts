import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Header = styled.div`
    width: 100%;
    height: 80px;
    background: #D4A9A7;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerItens = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Image = styled.img`
    width: 82px;
    height: 35px;
`;

export const Icon = styled(AccountCircleIcon)`
    width: 35px;
    height: 35px;
    color: #7A0000;
`;