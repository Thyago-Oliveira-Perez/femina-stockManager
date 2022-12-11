import styled from "@emotion/styled";

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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

export const Section1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  margin: 0px 0px 48px 0px;
`;

export const Section2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  margin: 0px 0px 48px 0px;
`;

export const Field = styled.div`
  min-width: 40%; 
  margin: 0px 24px;
`

export const ButtonsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 88%;

  button {
    padding: 0px 60px;
  }

  Button {
    height: 42px;
    width: 60px;
  }
`;
