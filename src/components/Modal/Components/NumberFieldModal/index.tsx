import { TextField } from "@mui/material";
import { INumberFieldModal } from "./types";

const NumberFieldModal = (props: INumberFieldModal) => {

  return (
    <div>
      {props.label == "PRECO" ? (
        <TextField
          name={props.name}
          variant="filled"
          fullWidth
          type={"text"}
          label={props.label}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
          style={{borderBottom: "solid 1px #7A0000"}}
        />
      ) : (
        <TextField
          name={props.name}
          fullWidth
          variant="filled"
          type={"number"}
          label={props.label}
          value={ props.value}
          onChange={props.onChange}
          disabled={props.disabled}
          style={{borderBottom: "solid 1px #7A0000"}}
        />
      )}
    </div>
  );
};

export default NumberFieldModal;
