import { Button, ButtonProps } from '@mui/material';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #D4A9A7;
`;

export const Box = styled.div`
  width: 525px;
  height: 525px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #FFFFFF;
  border-radius: 30px;
`;

export const Title = styled.h1`
  font: 50px bold 'Roboto';
  color: #7A0000;
`;

export const Form = styled.form`
  width: 65%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonArea = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonForm = styled(Button)<ButtonProps>`
  &&& {
    width: 240px;
    height: 48px;
    background: #7A0000;
    color: #FFFFFF;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    text-transform: none;
  }
`;
