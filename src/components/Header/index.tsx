import * as S from './header.styles';
import logo from '../../assets/FmStr.svg';

const Header = () => {
  return (
    <S.Header>
      <S.ContainerItens>
        <S.Image src={logo} />
        <S.Icon />
      </S.ContainerItens>
    </S.Header>
  );
};

export default Header;
