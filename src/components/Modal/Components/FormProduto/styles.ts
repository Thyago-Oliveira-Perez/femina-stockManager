import styled from "@emotion/styled";

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const FormSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: auto;
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
`;

export const Tittle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  h3 {
    color: #7A0000;
    padding: 0px 20px;
  }
`;
