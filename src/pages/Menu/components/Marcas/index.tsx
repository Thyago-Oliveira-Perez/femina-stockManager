import * as S from './styles';
import List from '../../../../components/List';
import ButtonInsert from '../../../../components/ButtonInsert';
import useMenuMarcas from './hooks/useMenuMarcas';

const Marcas = () => {

  const { columns, list, navigate } = useMenuMarcas();

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
            list !== null ? <List columns={columns} items={list} mode={'list'} /> : null
          }
        </S.ListArea>
      </S.Container>
    </>
  );
}

export default Marcas;
