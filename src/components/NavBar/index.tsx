import * as styles from './navBar.styles';
import Item from './components/Item';

export default function NavBar() {
  return (
    <styles.NavBar>
      <styles.List>
        <styles.Title>
          <h3>Produtos</h3>
        </styles.Title>
        <Item path={'/menu/produtos'} >
          Listagem de produtos
        </Item>
        <Item path={'/menu/categorias'} >
          Categorias
        </Item>
        <Item path={'/menu/modelos'} >
          Modelos
        </Item>
        <Item path={'/menu/fornecedores'} >
          Fornecedor
        </Item>
        <Item path={'/menu/marcas'} >
          Marcas
        </Item>
      </styles.List>
      <styles.List>
        <styles.Title>
          <h3>Usuários</h3>
        </styles.Title>
        {/* <Item path={'/menu/funcionarios'} >
          Funcionários
        </Item> */}
        <Item path={'/menu/banners'} >
          Banners
        </Item>
      </styles.List>
    </styles.NavBar>
  );
};
