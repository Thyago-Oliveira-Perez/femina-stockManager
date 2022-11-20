import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ISelectFieldProps, SelectFieldLabels } from "./selectfield.types";

const SelectField = (props: ISelectFieldProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select label={props.label} onChange={(e) => console.log(e.target.value)}>
        {props.label == SelectFieldLabels.TAMANHO ? (
          <div>
            {props.values.map((e) => {
              return <MenuItem key={e.id} value={e}>{e}</MenuItem>;
            })}
          </div>
        ) : (
          <div>
            {props.values.map((e) => {
              return <MenuItem key={e.id} value={e.id}>{e.nome}</MenuItem>;
            })}
          </div>
        )}
      </Select>
    </FormControl>
  );
};

export default SelectField;
