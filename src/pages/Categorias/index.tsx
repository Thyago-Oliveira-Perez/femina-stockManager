import * as S from './styles';
import List from '../../components/List';
import ButtonInsert from '../../components/ButtonInsert';
import useMenuCategorias from './hooks/useMenuCategorias';

const Categorias = () => {

    const { columns, openModal, list, setOpenModal } = useMenuCategorias();

    return (
        <>
          <S.Container>
              <S.StackHeader>
                <S.Title>Categorias</S.Title>
                <S.Actions>
                  <ButtonInsert 
                    onClick={() => setOpenModal(true)}
                  >
                    Cadastrar Categoria
                  </ButtonInsert>
                </S.Actions>
              </S.StackHeader>
            <S.ListArea>
              {
                list !== null ? <List columns={columns} items={list} mode={'list'} /> : null
              }
            </S.ListArea>
          </S.Container>
          {/* <Modal modalUsage={ModalUsage.CATEGORIAS} open={openModal} /> */}
        </>
      );
}

export default Categorias;
