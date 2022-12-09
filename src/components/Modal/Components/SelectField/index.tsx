import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ISelectFieldProps, SelectFieldLabels } from "./selectfield.types";

const SelectField = (props: ISelectFieldProps) => {
  return (
    <FormControl fullWidth style={{ width: "100%", margin: "20px 0px" }}>
      <InputLabel>{props.label}</InputLabel>
      {props.label == SelectFieldLabels.TAMANHO || props.label == SelectFieldLabels.TYPEBANNER ? (
        <Select
          name={props.name}
          required={true}
          value={props.value || ""}
          variant="filled"
          label={props.label}
          onChange={props.onChange}
          style={{ margin: "20px 0px", borderBottom: "solid 1px #7A0000" }}
        >
          {props.options.map((e, index) => {
            return (
              <MenuItem key={index} value={e}>
                {e}
              </MenuItem>
            );
          })}
        </Select>
      ) : (
        <Select
          name={props.name}
          required={true}
          value={props.value || ""}
          variant="filled"
          label={props.label}
          onChange={props.onChange}
          style={{ margin: "20px 0px", borderBottom: "solid 1px #7A0000" }}
        >
          {props.options.map((e) => {
            return (
              <MenuItem key={e.id + e.nome} value={e}>
                {e.nome}
              </MenuItem>
            );
          })}
        </Select>
      )}
    </FormControl>
  );
};

export default SelectField;
