import { RiDeleteBin5Fill } from "react-icons/ri";
import TextFieldModal from "../Modal/Components/TextField";
import * as S from "./styles";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { SmallFormProps } from "./types";
import useSmallForm from "./hooks/smallFormHooks";

const SmallForm = (props: SmallFormProps) => {
  
  const { handleNewData } = useSmallForm();
  
  return (
    <S.AddArea>
      <div style={{ width: "80%" }}>
        <TextFieldModal
          value={props.value}
          setValue={props.setValue}
          label={props.label}
        />
      </div>
      <S.ButtonAreas>
        <S.ButtonActions color={"#46C963"} onClick={() => handleNewData(props.value, props.endpoint)}>
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
