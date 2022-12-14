import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    border: 1.5px solid #777777;
    padding: 20px;
    margin-top: 20px;
    overflow-x: scroll;
    overflow-y: hidden;
`;

export const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-auto-flow: row;
    justify-content: center;
    grid-gap: 20px;
    padding: 30px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    };
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    };
    ::-webkit-scrollbar-thumb {
        background: #888888;
    };
    ::-webkit-scrollbar-thumb:hover {
        background: #555555;
    };
`;

export const Table = styled.table`
    width: 100%;
    height: 100%;
    border: 1px solid #C2C2C2;
`;

export const TableHead = styled.thead`
    background: #ffffff;
`;

export const TableRowHead = styled.tr`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    tex-align: center;
`;

export const TableTitle = styled.td`
    min-width: ${props => props.width}px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #000000;
`;

export const TableBody = styled.tbody`
    tr:nth-of-type(odd) {
        background-color: #f0e1e0;
    }
    tr:nth-of-type(even) {
        background-color: #ffffff;
    } 
    display: block;
    width: 100%;
    max-height: 55vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    };
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    };
    ::-webkit-scrollbar-thumb {
        background: #888888;
    };
    ::-webkit-scrollbar-thumb:hover {
        background: #555555;
    };
`;

export const TableRow = styled.tr`
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const TableCell = styled.td`
    min-width: ${props => props.width}px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2px;
`;

export const Image = styled.img`
   width: 120px;
   height: auto;
   max-height: 110px;
`;

export const ButtonActions = styled.button`
    width: 40px;
    height: 40px;
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

export const LoadingContainer = styled.div`
    width: 100%;
    heigth: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled(Typography)`
    max-width: 100%;
    font-size: 14px;
    color: #454545;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
