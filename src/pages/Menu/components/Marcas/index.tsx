import * as S from './styles';
import List from '../../../../components/List';
import ButtonInsert from '../../../../components/ButtonInsert';
import useMenuMarcas from './hooks/useMenuMarcas';

const Marcas = () => {

  const { 
    actions,
    columns, 
    list, 
    loading,
    hasMore, 
    setPageable, 
    navigate 
  } = useMenuMarcas();

  return (
    <>
      <S.Container>
        <S.StackHeader>
          <S.Title>Marcas</S.Title>
          <S.Actions>
            <ButtonInsert
              onClick={() => navigate('new')}
            >
              Cadastrar Marca
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

export default Marcas;
