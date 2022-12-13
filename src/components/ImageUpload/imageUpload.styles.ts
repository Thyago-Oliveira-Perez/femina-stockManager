import styled from "@emotion/styled";

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

export const ButtonAreas = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;