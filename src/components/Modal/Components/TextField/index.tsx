import { TextField } from "@mui/material";
import { ITextFieldModal } from "./types";

const TextFieldModal = (props: ITextFieldModal) => {
  return (
    <div>
      <TextField
        required={true}
        fullWidth
        variant="filled"
        type={"text"}
        value={props.value}
        name={props.name}
        disabled={props.disabled}
        placeholder={props.label}
        onChange={props.onChange}
        style={{ margin: "20px 0px", borderBottom: "solid 1px #7A0000"  }}
      />
    </div>
  );
};
export default TextFieldModal;
