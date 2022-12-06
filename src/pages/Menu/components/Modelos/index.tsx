import * as S from "./styles";
import List from "../../../../components/List";
import ButtonInsert from "../../../../components/ButtonInsert";
import useMenuModelos from "./hooks/useMenuModelos";
import { SelectFieldLabels } from "../../../../components/Modal/Components/SelectField/selectfield.types";
import TextFieldModal from "../../../../components/Modal/Components/TextField";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { RiDeleteBin5Fill } from "react-icons/ri";

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

  const handleNewModelo = () => {
    if (newModelo.trim().length > 0){
      saveNewModelo(newModelo)
    };
  };

  return (
    <>
      <S.Container>
        <S.StackHeader>
          <S.Title>Modelos</S.Title>
          <S.Actions>
            <ButtonInsert
              disable={
                list.find((e) => e.id === 0) !== undefined ? true : false
              }
              onClick={() => showFormNewModelo(true)}
              style={
                list.find((e) => e.id === 0) !== undefined
                  ? { backgroundColor: "#989898" }
                  : null
              }
            >
              Cadastrar Modelo
            </ButtonInsert>
          </S.Actions>
        </S.StackHeader>
        {isToAddNewModelo ? (
          <S.AddArea>
            <div style={{ width: "80%" }}>
              <TextFieldModal
                value={newModelo}
                setValue={setNewModelo}
                label={SelectFieldLabels.MODELO}
              />
            </div>
            <S.ButtonAreas>
              <S.ButtonActions
                color={"#46C963"}
                onClick={() => handleNewModelo()}
              >
                <BookmarkAddedIcon />
              </S.ButtonActions>
              <S.ButtonActions
                color={"#F05555"}
                onClick={() => showFormNewModelo(false)}
              >
                <RiDeleteBin5Fill size={17} />
              </S.ButtonActions>
            </S.ButtonAreas>
          </S.AddArea>
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
