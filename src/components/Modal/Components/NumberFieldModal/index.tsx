import { TextField } from "@mui/material";
import { useState } from "react";
import { INumberFieldModal } from "./types";

const NumberFieldModal = (props: INumberFieldModal) => {
  
  function numberFormat(value: number){
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "BRL",
      currencyDisplay: "narrowSymbol",
    }).format(value)
  }
  
  console.log(props.value)
  return (
    <>
      {props.label == "PRECO" ? (
        <TextField
          type={"text"}
          label={props.label}
          value={props.value}
          onChange={(e) => {
            props.setValue(numberFormat(parseInt(e.target.value)));
          }}
        />
      ) : (
        <TextField
          type={"number"}
          label={props.label}
          value={props.value < 1 ? 1 : props.value}
          onChange={(e) => {
            props.setValue(parseInt(e.target.value));
          }}
        />
      )}
    </>
  );
};

export default NumberFieldModal;
