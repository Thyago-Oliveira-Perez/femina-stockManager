import styled from "@emotion/styled";

export const Modal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Tittle = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;
    h3 {
        color: #7a0000;
        font-size: 26px;
    }
`;

export const Form = styled.div`
    width: 90%;
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    margin-bottom: 50px;
`;

export const ButtonsSection = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        padding: 0px 60px;
    }
    Button {
        width: 60px;
        height: 42px;
    }
`;
