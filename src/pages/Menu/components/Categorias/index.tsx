import * as S from './styles';
import List from '../../../../components/List';
import ButtonInsert from '../../../../components/ButtonInsert';
import useMenuCategorias from './hooks/useMenuCategorias';
import { truncate } from 'fs';
import { SelectFieldLabels } from '../../../../components/Modal/Components/SelectField/selectfield.types';
import { Endpoints } from '../../../../components/SmallForm/types';
import SmallForm from '../../../../components/SmallForm';

const Categorias = () => {

  const { 
    actions,
    columns, 
    list, 
    loading,
    hasMore, 
    setPageable, 
    navigate,
    isToAddNewCategoria,
    setIsToAddNewCategoria,
    newCategoria,
    setNewCategoria,
  } = useMenuCategorias();

  const showFormNewCategoria = (isToAdd: boolean) => {
    if (!isToAdd) {
      setIsToAddNewCategoria(isToAdd);
      setNewCategoria("");
    }
    setIsToAddNewCategoria(isToAdd);
  };

  return (
    <>
      <S.Container>
        <S.StackHeader>
          <S.Title>Categorias</S.Title>
          <S.Actions>
            <ButtonInsert
              onClick={() => showFormNewCategoria(true)}
            >
              Cadastrar Categoria
            </ButtonInsert>
          </S.Actions>
        </S.StackHeader>
        {isToAddNewCategoria ? (
          <SmallForm
            value={newCategoria}
            setValue={setNewCategoria}
            hideForm={setIsToAddNewCategoria}
            label={SelectFieldLabels.CATEGORIA}
            endpoint={Endpoints.CATEGORIA}
          />
        ) : null}
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
