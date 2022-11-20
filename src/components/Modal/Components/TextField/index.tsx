import { TextField } from "@mui/material";
import { ITextFieldModal } from "./types";

const TextFieldModal = (props: ITextFieldModal) => {
  return (
    <>
      <TextField
        type={typeof props.value == "string" ? "text" : "number"}
        value={props.value}
        name={props.label}
        placeholder={props.label}
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
      />
    </>
  );
};
export default TextFieldModal;
