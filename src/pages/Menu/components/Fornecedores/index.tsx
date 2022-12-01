import * as S from './styles';
import List from '../../../../components/List';
import ButtonInsert from '../../../../components/ButtonInsert';
import useMenuFornecedores from './hooks/useMenuFornecedores';

const Fornecedores = () => {

  const { columns, list, navigate } = useMenuFornecedores();

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
            list !== null ? <List columns={columns} items={list} mode={'list'} /> : null
          }
        </S.ListArea>
      </S.Container>
    </>
  );
}

export default Fornecedores;
