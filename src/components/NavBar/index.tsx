import { Link } from 'react-router-dom';
import iconNavBar from '../../assets/navBarItem.svg';
import * as styles from './navBar.styles';

export default function NavBar() {
  return (
    <styles.NavBar>
      <styles.List>
        <styles.Title>
          <h3>Produtos</h3>
        </styles.Title>
        <styles.Item>
          <img src={iconNavBar} alt='icon' />
          <Link
            to={'/produtos'}
            style={{ color: '#7A0000', textDecoration: 'none' }}
          >
            Listagem de produtos
          </Link>
        </styles.Item>
        <styles.Item>
          <img src={iconNavBar} alt='icon' />
          <Link
            to={'/categorias'}
            style={{ color: '#7A0000', textDecoration: 'none' }}
          >
            Categorias
          </Link>
        </styles.Item>
        <styles.Item>
          <img src={iconNavBar} alt='icon' />
          <Link
            to={'/modelos'}
            style={{ color: '#7A0000', textDecoration: 'none' }}
          >
            Modelos
          </Link>
        </styles.Item>
        <styles.Item>
          <img src={iconNavBar} alt='icon' />
          <Link
            to={'/fornecedores'}
            style={{ color: '#7A0000', textDecoration: 'none' }}
          >
            Fornecedor
          </Link>
        </styles.Item>
        <styles.Item>
          <img src={iconNavBar} alt='icon' />
          <Link
            to={'/marcas'}
            style={{ color: '#7A0000', textDecoration: 'none' }}
          >
            Marcas
          </Link>
        </styles.Item>
      </styles.List>
      <styles.List>
        <styles.Title>
          <h3>Usuários</h3>
        </styles.Title>
        <styles.Item>
          <img src={iconNavBar} alt='icon' />
          <Link
            to={'/funcionarios'}
            style={{ color: '#7A0000', textDecoration: 'none' }}
          >
            Funcionários
          </Link>
        </styles.Item>
        <styles.Item>
          <img src={iconNavBar} alt='icon' />
          <Link
            to={'/clientes'}
            style={{ color: '#7A0000', textDecoration: 'none' }}
          >
            Clientes
          </Link>
        </styles.Item>
      </styles.List>
    </styles.NavBar>
  );
};