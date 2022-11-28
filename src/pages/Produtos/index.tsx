import * as S from './styles';
import List from '../../components/List';
import Modal from '../../components/Modal';
import { ModalUsage } from '../../components/Modal/modal.types';
import ButtonInsert from '../../components/ButtonInsert';
import ListViewAction from '../../components/ListViewAction';
import useMenuProdutos from './hooks/useMenuProdutos';

const Produtos = () => {

  const { columns, viewList, openModal, list, setOpenModal, handleChangeViewList } = useMenuProdutos();
  
  return (
    <>
      <S.Container>
          <S.StackHeader>
            <S.Title>Produtos</S.Title>
            <S.Actions>
              <ButtonInsert 
                onClick={() => setOpenModal(true)}
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
      {/* <Modal modalUsage={ModalUsage.PRODUTOS} open={openModal} /> */}
    </>
  );
};

export default Produtos;
