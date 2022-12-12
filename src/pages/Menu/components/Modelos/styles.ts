import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
  overflow-y: scroll;
`;

export const ListArea = styled.div`
  width: 90%;
  height: 65vh;
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
  color: #9b4a46;
`;

export const Actions = styled.div`
  height: 100%;
  display: flex;
  gap: 10px;
`;

export const AddArea = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1.5px solid #777777;
  padding: 20px;
  margin-top: 20px;
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

export const ButtonAreas = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;