import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 20px;
`;

export const ListArea = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;    
`;

export const StackHeader = styled.div`
    width: 90%;
    height: 45px;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`;

export const Title = styled.h1`
    font-size: 25px;
    font-weight: 600;
    line-height: 35px;
    color: #9B4A46;
`;

export const Actions = styled.div`
    height: 100%;
    display: flex;
    gap: 10px;
`;
