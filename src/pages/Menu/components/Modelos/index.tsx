import * as S from './styles';
import List from '../../../../components/List';
import ButtonInsert from '../../../../components/ButtonInsert';
import useMenuModelos from './hooks/useMenuModelos';

const Modelos = () => {

  const { columns, list, navigate } = useMenuModelos();

  return (
    <>
      <S.Container>
        <S.StackHeader>
          <S.Title>Modelos</S.Title>
          <S.Actions>
            <ButtonInsert 
              onClick={() => navigate('new')}
            >
              Cadastrar Modelo
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

export default Modelos;
