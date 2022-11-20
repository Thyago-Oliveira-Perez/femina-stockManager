import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import w3color from "../../colorLib";
import { Tamanhos } from "../../types/common.types";
import NumberFieldModal from "./Components/NumberFieldModal";
import SelectField from "./Components/SelectField";
import { SelectFieldLabels, TextFieldLables } from "./Components/SelectField/selectfield.types";
import TextFieldModal from "./Components/TextField";
import { IModalProps } from "./modal.types";
import * as S from "./styles";

const Modal = (props: IModalProps) => {

  const [color, setColor] = useState("");
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState<string | number>(0);
  const [codigo, setCodigo] = useState("");
  const [preco, setPreco] = useState<string | number>("");


  useEffect(() => {
    convertColor(color);
  }, [color])

  function convertColor(inputColor: string) {
    let color = inputColor;
    if (color == "") {
      // validateColor();
      console.log("aaaa");
      return;
    }
    color = color.toLowerCase();
    color = color.replace(/;/g, ","); //replace any semicolon with a comma
  
    let c = w3color(color);
  
    //   if (c.valid) {
    //     if (c.toName() == "") {
    //       document.getElementById("name01").style.fontStyle = "italic";
    //       document.getElementById("name01").style.color = "#757575";
    //       document.getElementById("name01").innerHTML = "no name";
    //     } else {
    //       document.getElementById("name01").style.fontStyle = "normal";
    //       document.getElementById("name01").style.color = "#000000";
    //       document.getElementById("name01").innerHTML = c.toName();
    //     }
    //     document.getElementById("hex01").innerHTML = c.toHexString();
    //   } else {
    //     validateColor();
    //   }
    // }
    // function validateColor() {
    //   var color, c, x, i, l;
    //   color = document.getElementById("color01").value;
    //   c = c.replace(/;/g, ","); //replace any semicolon with a comma
    //   c = w3color(color);
    //   if (color == "" || !c.valid) {
    //     document.getElementById("result01").style.backgroundColor = "#f1f1f1";
    //     document.getElementById("resultTable").style.display = "none";
    //     document.getElementByIdnumber("error01").innerHTML = "Not a legal color value";
    //     document.getElementById("hex01").innerHTML = "";
    //   } else {
    //     document.getElementById("resultTable").style.display = "table";
    //     document.getElementById("error01").innerHTML = "";
  
    //     convertColor();
    //   }
    // }
    // function submitOnEnter(e) {
    //   keyboardKey = e.which || e.keyCode;
    //   if (keyboardKey == 13) {
    //     validateColor();
    //   }
  }
  
  // convertColor();




  const modalUsage: any = {
    PRODUTOS: () => {
      const tamanhos = [
        Tamanhos.PP,
        Tamanhos.P,
        Tamanhos.M,
        Tamanhos.G,
        Tamanhos.GG
      ]
      return (
        <div>
          <h3>Novo Produto</h3>
          <S.ProdutosSection>
            <TextFieldModal value={nome} setValue={setNome} label={TextFieldLables.NOME}/>
            <NumberFieldModal value={quantidade} setValue={setQuantidade} label={TextFieldLables.QUANTIDADE}/>
            <SelectField label={SelectFieldLabels.MARCA} values={[]} />
            <SelectField label={SelectFieldLabels.MODELO} values={[]} />
            <SelectField label={SelectFieldLabels.TAMANHO} values={tamanhos} />
          </S.ProdutosSection>
          <S.ProdutosSection>
            <TextFieldModal value={codigo} setValue={setCodigo} label={TextFieldLables.CODIGO}/>
            <NumberFieldModal value={preco} setValue={setPreco} label={TextFieldLables.PRECO}/>
            <SelectField label={SelectFieldLabels.CATEGORIA} values={[]} />
            <SelectField label={SelectFieldLabels.FORNECEDOR} values={[]} />
            <TextFieldModal value={color} setValue={setColor} label={TextFieldLables.COR}/>
          </S.ProdutosSection>
        </div>
      );
    },
    CATEGORIAS: () => {},
  };

  return <>{modalUsage[props.modalUsage]()}</>;
};

export default Modal;
