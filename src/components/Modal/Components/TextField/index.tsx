import { TextField } from "@mui/material";
import { ITextFieldModal } from "./types";

const TextFieldModal = (props: ITextFieldModal) => {
  return (
    <div>
      <TextField
        fullWidth
        variant="filled"
        type={"text"}
        value={props.value}
        name={props.label}
        placeholder={props.label}
        onChange={(e) => props.setValue(e.target.value)}
        style={{ margin: "20px 0px", borderBottom: "solid 1px #7A0000"  }}
      />
    </div>
  );
};
export default TextFieldModal;
