import { RiDeleteBin5Fill } from "react-icons/ri";
import TextFieldModal from "../Modal/Components/TextField";
import * as S from "./styles";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { SmallFormActions, SmallFormProps } from "./types";
import useSmallForm from "./hooks/smallFormHooks";

const SmallForm = (props: SmallFormProps) => {
  const { handleNewData, handleEditData } = useSmallForm();

  console.log("edit -> ", props.value);

  return (
    <S.AddArea>
      <div style={{ width: "80%" }}>
        <TextFieldModal
          value={props.value.nome}
          name={props.name}
          onChange={props.onChange}
          label={props.label}
        />
      </div>
      <S.ButtonAreas>
        <S.ButtonActions
          color={"#46C963"}
          onClick={() =>
            props.action === SmallFormActions.add
              ? handleNewData(props.value.nome, props.endpoint)
              : props.action === SmallFormActions.edit
              ? handleEditData(props.value, props.endpoint)
              : console.log("Something deu errado, jhow!")
          }
        >
          <BookmarkAddedIcon />
        </S.ButtonActions>
        <S.ButtonActions
          color={"#F05555"}
          onClick={() => props.hideForm(false)}
        >
          <RiDeleteBin5Fill size={17} />
        </S.ButtonActions>
      </S.ButtonAreas>
    </S.AddArea>
  );
};

export default SmallForm;
