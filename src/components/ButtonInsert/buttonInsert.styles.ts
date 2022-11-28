import styled from '@emotion/styled';

export const AreaButton = styled.div`
    width: 240px;
    height: 100%;
    background: #7a0000;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        transition: 0.4s linear;
        opacity: .8;
    }
`;

export const StyledButton = styled.button`
    width: 70%;
    height: 100%;
    background: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;
