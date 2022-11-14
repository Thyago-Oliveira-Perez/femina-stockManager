import styled from '@emotion/styled';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MenuItem, Typography } from '@mui/material';

export const Header = styled.div`
  width: 100%;
  height: 80px;
  background: #D4A9A7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerItens = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 82px;
  height: 35px;
`;

export const Icon = styled(AccountCircleIcon)`
  width: 35px;
  height: 35px;
  color: #7A0000;
  cursor: pointer;
  &&:hover {
      opacity: .5;
  }
`;

export const Action = styled(MenuItem)`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: #9B4A46;
`;

export const IconLogout = styled(LogoutIcon)`
  width: 25px;
  height: 25px;
  color: #7A0000;
`;
