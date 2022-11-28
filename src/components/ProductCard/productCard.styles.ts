import { Typography } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
    width: 17rem;
    height: 24rem;
    border: 1px solid #C2C2C2;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentArea = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Image = styled.img`
    width: 100%;
    height: 160px;
`;

export const AreaInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    aling-items: center;
`;

export const Title = styled(Typography)`
    font-size: 16px;
    font-weight: 600;
    color: #000000;
`;

export const Text = styled(Typography)` 
    max-width: 60%;
    font-size: 16px;
    font-weight: 600;
    color: #454545;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ButtonActions = styled.button`
    width: 50px;
    height: 35px;
    background: ${props => props.color};
    border-radius: 5px;
    tex-align: center;
    color: #ffffff;
    cursor: pointer;
    transition: .3s ease-out;
    &:hover {
        opacity: 0.7;
    }
`;
