import { TextField } from "@mui/material";
import { useState } from "react";
import { INumberFieldModal } from "./types";

const NumberFieldModal = (props: INumberFieldModal) => {

  /**
   * Formata o input do usuario de number
   * para um partern com moeda brasileira (real) 
   */
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
            props.setValue(parseInt(e.target.value));
          }}
          style={{borderBottom: "solid 1px #7A0000"}}
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
          style={{borderBottom: "solid 1px #7A0000"}}
        />
      )}
    </div>
  );
};

export default NumberFieldModal;
