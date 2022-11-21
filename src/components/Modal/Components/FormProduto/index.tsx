import { Button, FormControl } from "@mui/material";
import { useEffect, useState } from "react";
import { Tamanhos } from "../../../../types/common.types";
import NumberFieldModal from "../NumberFieldModal";
import SelectField from "../SelectField";
import {
  SelectFieldLabels,
  TextFieldLables,
} from "../SelectField/selectfield.types";
import TextFieldModal from "../TextField";
import * as S from "./styles";

const FormProduto = () => {
  /**
   * TextFieldModal
   */
  const [cor, setColor] = useState<string>("");
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState<string | number>(0);

  /**
   * NumberFieldModal
   */
  const [codigo, setCodigo] = useState("");
  const [preco, setPreco] = useState<string | number>("");

  /**
   * SelectField
   */
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fornecedor, setFornecedor] = useState("");

  const tamanhos = [
    Tamanhos.PP,
    Tamanhos.P,
    Tamanhos.M,
    Tamanhos.G,
    Tamanhos.GG,
  ];

  useEffect(() => {
    let corPattern = cor.trim().replace(" ", "_");
    console.log(convertColor(corPattern));
  }, [cor]);

  function convertColor(color: string) {
    var colours: any = {
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azul: "#f0ffff",
      bege: "#f5f5dc",
      preto: "#000000",
      azul_violeta: "#8a2be2",
      castanho: "#a52a2a",
      azul_cadete: "#5f9ea0",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      carmesim: "#dc143c",
      ciano: "#00ffff",
      azul_escuro: "#00008b",
      ciano_escuro: "#008b8b",
      cinza_escuro: "#a9a9a9",
      verde_escuro: "#006400",
      magenta_escuro: "#8b008b",
      verde_oliva_escuro: "#556b2f",
      laranja_escuro: "#ff8c00",
      vermelho_escuro: "#8b0000",
      salmão_escuro: "#e9967a",
      turquesa_escura: "#00ced1",
      violeta_escuro: "#9400d3",
      rosa_escuro: "#ff1493",
      fúcsia: "#ff00ff",
      ouro: "#ffd700",
      cinzento: "#808080",
      verde: "#008000",
      verdeamarelado: "#adff2f",
      marfim: "#fffff0",
      lavanda: "#e6e6fa",
      gramado: "#7cfc00",
      azul_claro: "#add8e6",
      coral_claro: "#f08080",
      ciano_claro: "#e0ffff",
      cinza_claro: "#d3d3d3",
      salmão_claro: "#ffa07a",
      lima: "#00ff00",
      verde_limão: "#32cd32",
      linho: "#faf0e6",
      magenta: "#ff00ff",
      marrom: "#800000",
      verde_marinho: "#3cb371",
      renda_antiga: "#fdf5e6",
      olivedrab: "#6b8e23",
      laranja: "#ffa500",
      vermelho_alaranjado: "#ff4500",
      orquídea: "#da70d6",
      rosa: "#ffc0cb",
      ameixa: "#dda0dd",
      roxo: "#800080",
      vermelho: "#ff0000",
      salmão: "#fa8072",
      areia: "#f4a460",
      verde_mar: "#2e8b57",
      siena: "#a0522d",
      prata: "#c0c0c0",
      neve: "#fffafa",
      bronzeado: "#d2b48c",
      tomate: "#ff6347",
      turquesa: "#40e0d0",
      branco: "#ffffff",
      amarelo: "#ffff00",
    };

    if (typeof colours[color.toLowerCase()] != "undefined") {
      return colours[color.toLowerCase()];
    }
    return false;
  }

  return (
    <S.Modal>
      <S.Tittle>
        <h3>Novo Produto</h3>
      </S.Tittle>
      <S.FormSection>
        <S.SideSection>
          <FormControl fullWidth>
            <TextFieldModal
              value={nome}
              setValue={setNome}
              label={TextFieldLables.NOME}
            />
            <NumberFieldModal
              value={quantidade}
              setValue={setQuantidade}
              label={TextFieldLables.QUANTIDADE}
            />
            <SelectField
              label={SelectFieldLabels.MARCA}
              value={marca}
              setValue={setMarca}
              options={[]}
            />
            <SelectField
              label={SelectFieldLabels.MODELO}
              value={modelo}
              setValue={setModelo}
              options={[]}
            />
            <SelectField
              label={SelectFieldLabels.TAMANHO}
              value={tamanho}
              setValue={setTamanho}
              options={tamanhos}
            />
          </FormControl>
        </S.SideSection>

        <S.SideSection>
          <FormControl fullWidth>
            <TextFieldModal
              value={codigo}
              setValue={setCodigo}
              label={TextFieldLables.CODIGO}
            />
            <NumberFieldModal
              value={preco}
              setValue={setPreco}
              label={TextFieldLables.PRECO}
            />
            <SelectField
              label={SelectFieldLabels.CATEGORIA}
              value={categoria}
              setValue={setCategoria}
              options={[]}
            />
            <SelectField
              label={SelectFieldLabels.FORNECEDOR}
              value={fornecedor}
              setValue={setFornecedor}
              options={[]}
            />
            <TextFieldModal
              value={cor}
              setValue={setColor}
              label={TextFieldLables.COR}
            />
          </FormControl>
        </S.SideSection>
      </S.FormSection>
      <S.ButtonsSection>
        <Button variant="contained" style={{"backgroundColor" : "#F05555"}}>Cancelar</Button>
        <Button variant="contained" style={{"backgroundColor" : "#6BB3F5"}}>Cadastrar</Button>
      </S.ButtonsSection>
    </S.Modal>
  );
};

export default FormProduto;
