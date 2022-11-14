import * as S from './layout.styles';
import Header from '../Header';
import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';
import { FC } from 'react';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <S.Container>
        <NavBar />
        <Outlet />
      </S.Container>
    </>
  );
};

export default Layout;
