import * as S from "./styles";
import List from "../../../../components/List";
import ButtonInsert from "../../../../components/ButtonInsert";
import useMenuMarcas from "./hooks/useMenuMarcas";
import { Endpoints } from "../../../../components/SmallForm/types";
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
    newMarca,
    handleChange,
    showFormNewMarca
  } = useMenuMarcas();

  return (
    <>
      <S.Container>
        <S.StackHeader>
          <S.Title>Marcas</S.Title>
          <S.Actions>
            <ButtonInsert onClick={() => showFormNewMarca(true)}>
              Cadastrar Marca
            </ButtonInsert>
          </S.Actions>
        </S.StackHeader>
        {isToAddNewMarca ? (
          <SmallForm
            value={newMarca}
            name={'marca'}
            onChange={(e) => handleChange(e)}
            hideForm={setIsToAddNewMarca}
            label={SelectFieldLabels.MARCA}
            endpoint={Endpoints.MARCA}
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

export default Marcas;
