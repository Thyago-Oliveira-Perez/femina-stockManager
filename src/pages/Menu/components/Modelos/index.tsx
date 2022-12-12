import * as S from "./styles";
import List from "../../../../components/List";
import ButtonInsert from "../../../../components/ButtonInsert";
import useMenuModelos from "./hooks/useMenuModelos";
import { SelectFieldLabels } from "../../../../components/Modal/Components/SelectField/selectfield.types";
import SmallForm from "../../../../components/SmallForm";
import {
  Endpoints,
  SmallFormActions,
} from "../../../../components/SmallForm/types";

const Modelos = () => {
  const {
    actions,
    columns,
    list,
    loading,
    hasMore,
    setPageable,
    isToAddNewModelo,
    setIsToAddNewModelo,
    isToEditNewModelo,
    setIsToEditNewModelo,
    newModelo,
    handleChange,
    handleShowFormNewModelo,
    handleShowFormEditModelo,
    handleEdit
  } = useMenuModelos();

  return (
    <>
      <S.Container>
        <S.StackHeader>
          <S.Title>Modelos</S.Title>
          <S.Actions>
            <ButtonInsert onClick={() => handleShowFormNewModelo(true)}>
              Cadastrar Modelo
            </ButtonInsert>
          </S.Actions>
        </S.StackHeader>
        {isToAddNewModelo ? (
          <SmallForm
            value={newModelo}
            name={"modelo"}
            onChange={(e) => handleChange(e)}
            hideForm={handleShowFormNewModelo}
            label={SelectFieldLabels.MODELO}
            endpoint={Endpoints.MODELO}
            action={SmallFormActions.add}
          />
        ) : isToEditNewModelo ? (
          <SmallForm
            value={newModelo}
            name={"modelo"}
            onChange={(e) => handleChange(e)}
            hideForm={handleShowFormEditModelo}
            label={SelectFieldLabels.MODELO}
            endpoint={Endpoints.MODELO}
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

export default Modelos;
