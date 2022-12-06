import * as S from "./styles";
import List from "../../../../components/List";
import ButtonInsert from "../../../../components/ButtonInsert";
import useMenuModelos from "./hooks/useMenuModelos";
import { SelectFieldLabels } from "../../../../components/Modal/Components/SelectField/selectfield.types";
import SmallForm from "../../../../components/SmallForm";
import { Endpoints } from "../../../../components/SmallForm/types";

const Modelos = () => {
  const {
    actions,
    columns,
    list,
    setList,
    loading,
    hasMore,
    setPageable,
    navigate,
    isToAddNewModelo,
    setIsToAddNewModelo,
    newModelo,
    setNewModelo,
    saveNewModelo,
  } = useMenuModelos();

  const showFormNewModelo = (isToAdd: boolean) => {
    if (!isToAdd) {
      setIsToAddNewModelo(isToAdd);
      setNewModelo("");
    }
    setIsToAddNewModelo(isToAdd);
  };

  return (
    <>
      <S.Container>
        <S.StackHeader>
          <S.Title>Modelos</S.Title>
          <S.Actions>
            <ButtonInsert
              onClick={() => showFormNewModelo(true)}
            >
              Cadastrar Modelo
            </ButtonInsert>
          </S.Actions>
        </S.StackHeader>
        {isToAddNewModelo ? (
          <SmallForm
            value={newModelo}
            setValue={setNewModelo}
            hideForm={setIsToAddNewModelo}
            label={SelectFieldLabels.MODELO}
            endpoint={Endpoints.MODELO}
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
            />
          ) : null}
        </S.ListArea>
      </S.Container>
    </>
  );
};

export default Modelos;
