import styled from '@emotion/styled';

export const Container = styled.div`
    width: 100%;
    border: 1.5px solid #777777;
    padding: 20px;
    margin-top: 20px;
`;

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    grid-gap: 30px;
    padding: 50px;
`;

export const Table = styled.table`
    width: 100%;
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
