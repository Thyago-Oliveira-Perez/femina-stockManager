import * as S from './styles';
import List from '../../../../components/List';
import ButtonInsert from '../../../../components/ButtonInsert';
import useMenuFornecedores from './hooks/useMenuFornecedores';

const Fornecedores = () => {

  const { 
    actions,
    columns, 
    list,
    loading,
    hasMore, 
    setPageable, 
    navigate 
  } = useMenuFornecedores();

  return (
    <>
      <S.Container>
        <S.StackHeader>
          <S.Title>Fornecedores</S.Title>
          <S.Actions>
            <ButtonInsert
              onClick={() => navigate('new')}
            >
              Cadastrar Fornecedor
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

export default Fornecedores;
