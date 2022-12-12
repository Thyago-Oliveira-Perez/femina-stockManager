import styled from "styled-components";

export const AddArea = styled.div`
  width: 86%;
  max-height: 360px;
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