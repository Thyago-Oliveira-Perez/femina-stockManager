import * as S from './styles';
import List from '../../../../components/List';
import ButtonInsert from '../../../../components/ButtonInsert';
import ListViewAction from '../../../../components/ListViewAction';
import useMenuProdutos from './hooks/useMenuProdutos';

const Produtos = () => {

  const { columns, viewList, list, navigate, handleChangeViewList } = useMenuProdutos();
  
  return (
    <>
      <S.Container>
          <S.StackHeader>
            <S.Title>Produtos</S.Title>
            <S.Actions>
              <ButtonInsert 
                onClick={() => navigate('new')}
              >
                Cadastrar Produto
              </ButtonInsert>
              <ListViewAction value={viewList} onChange={(i) => handleChangeViewList(i)} />
            </S.Actions>
          </S.StackHeader>
        <S.ListArea>
          {
            list !== null ? <List columns={columns} items={list} mode={viewList} /> : null
          }
        </S.ListArea>
      </S.Container>
    </>
  );
};

export default Produtos;
