import { Button, Checkbox, FormControl } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Tamanhos } from "../../../../../types/common.types";
import NumberFieldModal from "../../NumberFieldModal";
import SelectField from "../../SelectField";
import {
  SelectFieldLabels,
  TextFieldLables,
} from "../../SelectField/selectfield.types";
import TextFieldModal from "../../TextField";
import { Categoria } from "./types";
import { Fornecedor } from "../FormFornecedor/types";
import { Marca } from "./types";
import { Modelo } from "./types";
import { IFromProdutoProps } from "./types";
import ProdutoApi from "../../../../../api/Produtos";
import * as S from "./styles";
import axios from "axios";
import upload_image from "../../../../../assets/upload_imagem.svg";
import arrastar_imagem from "../../../../../assets/arrastar_imagem.svg";

const FormProduto = (props: IFromProdutoProps) => {
  const { cadastro, getProductInfos } = ProdutoApi();

  /**
   * input style
   */
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  /**
   * Component -> TextFieldModal
   */
  const [cor, setColor] = useState<string>("");
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState<number>(0);

  /**
   * Component -> NumberFieldModal
   */
  const [codigo, setCodigo] = useState("");
  const [preco, setPreco] = useState<number>(0);

  /**
   * Component -> SelectField
   */
  const [marca, setMarca] = useState<Marca>();
  const [modelo, setModelo] = useState<Modelo[]>();
  const [tamanho, setTamanho] = useState<string>("");
  const [categoria, setCategoria] = useState<Categoria>();
  const [fornecedor, setFornecedor] = useState<Fornecedor>();
  const [descricao, setDescricao] = useState("");
  const [isDestaque, setIsDestaque] = useState(false);
  const [images, setImagens] = useState<any[]>([]);

  const tamanhos = [
    Tamanhos.PP,
    Tamanhos.P,
    Tamanhos.M,
    Tamanhos.G,
    Tamanhos.GG,
  ];

  useEffect(() => {
    if(props.productId){
      getProductInfos(props.productId).then((response) => {
        console.log(response)
      })
    }
  }, [])

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

  const inputRef: any = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log("fileObj is", fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);

    setImagens([...images, fileObj]);
  };

  const handleCancel = () => {
    props.isToCloseModal(!props.isModalOpen);
  };

  const handleRegister = () => {
    const condition0 = cor != null || cor != undefined;
    const condition1 = nome != null || nome != undefined;
    const condition2 = quantidade != null || quantidade != undefined;
    const condition3 = codigo != null || codigo != undefined;
    const condition4 = preco != null || preco != undefined;
    const condition5 = marca != null || marca != undefined;
    const condition6 = modelo != null || modelo != undefined;
    const condition7 = tamanho != null || tamanho != undefined;
    const condition8 = categoria != null || categoria != undefined;
    const condition9 = fornecedor != null || fornecedor != undefined;
    const condition10 = descricao != null || descricao != undefined;

    if (
      (condition0 &&
        condition1 &&
        condition2 &&
        condition3 &&
        condition4 &&
        condition5 &&
        condition6 &&
        condition7 &&
        condition8 &&
        condition9 &&
        condition10) ||
      true
    ) {
      const newProduto: string = JSON.stringify({
        cor: cor,
        nome: nome,
        codigo: codigo,
        valor: preco,
        marca: marca,
        modelo: modelo,
        tamanho: tamanho,
        categoria: categoria,
        fornecedor: fornecedor,
        descricao: descricao,
        destaque: isDestaque,
        isActive: true,
      });

      const formData = new FormData();

      /**
       * monta o objeto para enviar via form-data
       * para o backend
       */
      formData.append("produto", newProduto);
      images.forEach((image) => {
        formData.append("image", image);
      });

      axios({
        url: "http://localhost:8080/api/produtos/estoque/insert",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => {
        console.log("response :", response);
      });
    }
  };

  return (
    <S.Modal>
      <S.Tittle>
        <h3>Novo Produto</h3>
      </S.Tittle>
      <S.FormSection>
        <S.Sections>
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
        </S.Sections>
        <div style={{ width: "100%" }}>
          <textarea
            name={TextFieldLables.DESCRICAO}
            id=""
            value={descricao}
            rows={20}
            style={{
              margin: "20px 20px",
              minWidth: "97.2%",
              maxWidth: "97.2%",
              height: "120px",
              borderBottom: "solid 1px #7A0000",
            }}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder={TextFieldLables.DESCRICAO}
          ></textarea>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "97.2%",
              maxWidth: "97.2%",
              margin: "20px 20px",
              height: "120px",
              border: "dotted 1px #7A0000",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                handleClick();
              }}
            >
              <img
                style={{ margin: "10px 0px" }}
                src={upload_image}
                alt=""
              />
              <img src={arrastar_imagem} alt="" />
              <input
                style={{ display: "none" }}
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Checkbox
              {...label}
              checked={isDestaque}
              onClick={() => setIsDestaque(!isDestaque)}
            />
            <label
              style={{
                color: "#9B4A46",
                fontSize: "20px",
              }}
            >
              <strong>O produto é um destaque?</strong>
            </label>
          </div>
        </div>
      </S.FormSection>
      <S.ButtonsSection>
        <Button
          variant="contained"
          style={{ backgroundColor: "#BB2929" }}
          onClick={() => handleCancel()}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#118DE8" }}
          onClick={() => handleRegister()}
        >
          Cadastrar
        </Button>
      </S.ButtonsSection>
    </S.Modal>
  );
};

export default FormProduto;
