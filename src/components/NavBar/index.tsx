import * as styles from './navBar.styles';
import Item from './components/Item';

export default function NavBar() {
  return (
    <styles.NavBar>
      <styles.List>
        <styles.Title>
          <h3>Produtos</h3>
        </styles.Title>
        <Item path={'/produtos'} >
          Listagem de produtos
        </Item>
        <Item path={'/categorias'} >
          Categorias
        </Item>
        <Item path={'/modelos'} >
          Modelos
        </Item>
        <Item path={'/fornecedores'} >
          Fornecedor
        </Item>
        <Item path={'/marcas'} >
          Marcas
        </Item>
      </styles.List>
      <styles.List>
        <styles.Title>
          <h3>Usuários</h3>
        </styles.Title>
        <Item path={'/funcionarios'} >
          Funcionários
        </Item>
        <Item path={'/clientes'} >
          Clientes
        </Item>
      </styles.List>
    </styles.NavBar>
  );
};
