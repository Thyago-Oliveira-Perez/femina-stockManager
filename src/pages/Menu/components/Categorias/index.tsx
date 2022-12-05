import * as S from './styles';
import List from '../../../../components/List';
import ButtonInsert from '../../../../components/ButtonInsert';
import useMenuCategorias from './hooks/useMenuCategorias';

const Categorias = () => {

  const { 
    actions,
    columns, 
    list, 
    loading,
    hasMore, 
    setPageable, 
    navigate 
  } = useMenuCategorias();

  return (
    <>
      <S.Container>
        <S.StackHeader>
          <S.Title>Categorias</S.Title>
          <S.Actions>
            <ButtonInsert
              onClick={() => navigate('new')}
            >
              Cadastrar Categoria
            </ButtonInsert>
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
                mode={'list'} 
              /> : null
          }
        </S.ListArea>
      </S.Container>
    </>
  );
}

export default Categorias;
