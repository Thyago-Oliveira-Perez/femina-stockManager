import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ISelectFieldProps, SelectFieldLabels } from "./selectfield.types";

const SelectField = (props: ISelectFieldProps) => {
  return (
    <FormControl fullWidth style={{ width: "100%", margin: "20px 0px" }}>
      <InputLabel>{props.label}</InputLabel>
      {props.label == SelectFieldLabels.TAMANHO ? (
        <Select
          value={props.value}
          variant="filled"
          label={props.label}
          onChange={(e) => props.setValue(e.target.value)}
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
          value={props.value}
          variant="filled"
          label={props.label}
          onChange={(e) => props.setValue(e.target.value)}
        >
          {props.options.map((e) => {
            return (
              <MenuItem key={e.id + e.nome} value={e.id}>
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
