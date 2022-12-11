import * as S from "./styles";
import List from "../../../../components/List";
import ButtonInsert from "../../../../components/ButtonInsert";
import useMenuMarcas from "./hooks/useMenuMarcas";
import {
  Endpoints,
  SmallFormActions,
} from "../../../../components/SmallForm/types";
import { SelectFieldLabels } from "../../../../components/Modal/Components/SelectField/selectfield.types";
import SmallForm from "../../../../components/SmallForm";

const Marcas = () => {
  const {
    actions,
    columns,
    list,
    loading,
    hasMore,
    setPageable,
    isToAddNewMarca,
    setIsToAddNewMarca,
    isToEditNewMarca,
    setIsToEditNewMarca,
    newMarca,
    handleChange,
    handleShowFormNewMarca,
    handleShowFormEditModelo,
    handleEdit,
  } = useMenuMarcas();

  return (
    <>
      <S.Container>
        <S.StackHeader>
          <S.Title>Marcas</S.Title>
          <S.Actions>
            <ButtonInsert onClick={() => handleShowFormNewMarca(true)}>
              Cadastrar Marca
            </ButtonInsert>
          </S.Actions>
        </S.StackHeader>
        {isToAddNewMarca ? (
          <SmallForm
            value={newMarca}
            name={"marca"}
            onChange={(e) => handleChange(e)}
            hideForm={handleShowFormNewMarca}
            label={SelectFieldLabels.MARCA}
            endpoint={Endpoints.MARCA}
            action={SmallFormActions.add}
          />
        ) : isToEditNewMarca ? (
          <SmallForm
            value={newMarca}
            name={"marca"}
            onChange={(e) => handleChange(e)}
            hideForm={handleShowFormEditModelo}
            label={SelectFieldLabels.MARCA}
            endpoint={Endpoints.MARCA}
            action={SmallFormActions.edit}
          />
        ) : null}
        <S.ListArea>
          {list.length > 0 ? (
            <List
              actions={actions}
              loading={loading}
              hasMore={hasMore}
              setNewPage={setPageable}
              columns={columns}
              items={list}
              mode={"list"}
              onEditSimple={handleEdit}
            />
          ) : null}
        </S.ListArea>
      </S.Container>
    </>
  );
};

export default Marcas;
