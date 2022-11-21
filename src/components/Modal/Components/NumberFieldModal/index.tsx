import { TextField } from "@mui/material";
import { useState } from "react";
import { INumberFieldModal } from "./types";

const NumberFieldModal = (props: INumberFieldModal) => {
  function numberFormat(value: number) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "BRL",
      currencyDisplay: "narrowSymbol",
    }).format(value);
  }

  return (
    <div>
      {props.label == "PRECO" ? (
        <TextField
          variant="filled"
          fullWidth
          type={"text"}
          label={props.label}
          value={props.value}
          onChange={(e) => {
            props.setValue(numberFormat(parseInt(e.target.value)));
          }}
        />
      ) : (
        <TextField
          fullWidth
          variant="filled"
          type={"number"}
          label={props.label}
          value={props.value < 1 ? 1 : props.value}
          onChange={(e) => {
            props.setValue(parseInt(e.target.value));
          }}
        />
      )}
    </div>
  );
};

export default NumberFieldModal;
