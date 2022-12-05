import * as S from './styles';
import List from '../../../../components/List';
import ButtonInsert from '../../../../components/ButtonInsert';
import ListViewAction from '../../../../components/ListViewAction';
import useMenuProdutos from './hooks/useMenuProdutos';

const Produtos = () => {

  const {
    actions,
    columns, 
    viewList, 
    list, 
    loading,
    hasMore, 
    setPageable, 
    navigate, 
    handleChangeViewList 
  } = useMenuProdutos();
  
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
            list.length > 0 ?
              <List 
                actions={actions}
                loading={loading}
                hasMore={hasMore} 
                setNewPage={setPageable} 
                columns={columns} 
                items={list} 
                mode={viewList} 
              /> : null
          }
        </S.ListArea>
      </S.Container>
    </>
  );
};

export default Produtos;
