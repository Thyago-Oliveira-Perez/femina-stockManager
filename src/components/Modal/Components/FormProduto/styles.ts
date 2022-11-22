import styled from "@emotion/styled";

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const Tittle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  h3 {
    color: #7a0000;
    padding: 0px 20px;
    font-size: 26px;
  }

  margin: 0px 0px 30px 0px;
`;

export const FormSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin: 0px 0px 100px 0px;
`;

export const SideSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: auto;
  margin: 0px 20px;
`;

export const ButtonsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  button {
    padding: 0px 60px;
  }

  Button {
    height: 42px;
    width: 60px;
  }
`;
