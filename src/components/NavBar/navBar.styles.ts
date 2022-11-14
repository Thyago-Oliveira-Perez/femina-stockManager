import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 250px;
  height: 100%;
  background-color: #FFFFFF;
  border-top: 1px solid #a9a9a9;
  border-right: 1px solid #a9a9a9;
  padding: 20px 0 0 20px;
`;

export const List = styled.ul`
  width: 100%;
  list-style-type: none;
`;

export const Title = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0;
  color: #c2c2c2;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 0;
  gap: 15px;
  width: auto;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 20px;
  heigth: 20px;
  margin-bottom: 5px;
`;

export const LinkStyled = styled(Link)`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #7A0000;
`;
