import * as S from './header.styles';
import logo from '../../assets/FmStr.svg';
import useHeaderActions from './hooks/useHeaderActions';
import { Menu } from '@mui/material';

const Header = () => {

  const { handleOpen, handleClose, handleLogout, open } = useHeaderActions();

  return (
    <S.Header>
      <S.ContainerItens>
        <S.Image src={logo} />
        <S.Icon 
          aria-label='menu'
          onClick={(e) => handleOpen(e)}
        />
        <Menu
          id='menu-appbar'
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
        >
          <S.Action onClick={handleLogout}><S.Text>Sair</S.Text><S.IconLogout /></S.Action>
        </Menu>
      </S.ContainerItens>
    </S.Header>
  );
};

export default Header;
