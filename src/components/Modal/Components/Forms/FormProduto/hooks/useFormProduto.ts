import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CategoriasApi from "../../../../../../api/Categorias";
import FornecedoresApi from "../../../../../../api/Fornecedores";
import MarcasApi from "../../../../../../api/Marcas";
import ModelosApi from "../../../../../../api/Modelos";
import ProdutoApi from "../../../../../../api/Produtos";
import { IPageRequest, Tamanhos } from "../../../../../../types/common.types";
import { actionFile, INewProduto } from "../types";

const useFormProduto = (props: any) => {
  const { getProductInfos } = ProdutoApi();
  const { listMarcas } = MarcasApi();
  const { listModelos } = ModelosApi();
  const { listCategorias } = CategoriasApi();
  const { listFornecedores } = FornecedoresApi();
  /**
   * input style
   */
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const pageableOptions: IPageRequest = {
    currentPage: 0,
    filter: "",
    pageSize: 100,
  };
  const [produto, setProduto] = useState<INewProduto>({
    isActive: true,
    codigo: "",
    nome: "",
    valor: 0,
    categoria: null,
    modelo: null,
    fornecedor: null,
    marca: null,
    cor: "",
    tamanho: "",
    descricao: "",
    destaque: false,
    imagem: "",
  });
  const [marcasOptions, setMarcasOptions] = useState<any[]>([]);
  const [modelosOptions, setModelosOptions] = useState<any[]>([]);
  const [categoriasOptions, setCategoriasOptions] = useState<any[]>([]);
  const [fornecedoresOptions, setFornecedoresOptions] = useState<any[]>([]);

  const [images, setImagens] = useState<any[]>([]);

  const [showMessage, setShowMessage] = useState<boolean>(false);

  const tamanhos = [
    Tamanhos.PP,
    Tamanhos.P,
    Tamanhos.M,
    Tamanhos.G,
    Tamanhos.GG,
  ];

  /**
   * style do modal de aviso
   */
  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "20%",
    height: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "background.paper",
    overflow: "auto",
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  };

  useEffect(() => {
    if (props.productId) {
      getProductInfos(props.productId).then((response) => {
        console.log(response);
      });
    }
    listMarcas(pageableOptions).then((response) => {
      return setMarcasOptions(response.content);
    });
    listModelos(pageableOptions).then((response) => {
      return setModelosOptions(response.content);
    });
    listCategorias(pageableOptions).then((response) => {
      return setCategoriasOptions(response.content);
    });
    listFornecedores(pageableOptions).then((response) => {
      return setFornecedoresOptions(response.content);
    });
  }, []);

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

  const handleFileChange = (event: any, action: actionFile, index?: number) => {
    if (action === actionFile.add && images.length < 5) {
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
    } else if (action === actionFile.remove && index) {
      setImagens(images.filter((e, position) => position !== index));
    } else if (index === 0) {
      setImagens([]);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setProduto({ ...produto, [event.target.name]: event.target.value });
  };

  const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduto({ ...produto, [event.target.name]: event.target.value });
  };

  const handleCancel = () => {
    props.isToCloseModal(!props.isModalOpen);
  };

  const handleRegister = () => {
    setProduto({
      ...produto,
      cor: convertColor(produto.cor) !== false ? convertColor(produto.cor) : "",
    });
    const condition0 =
      produto.nome != null && produto.nome != undefined && produto.nome != "";
    const condition1 =
      produto.cor != null && produto.cor != undefined && produto.cor != "";
    const condition2 =
      produto.codigo != null &&
      produto.codigo != undefined &&
      produto.codigo != "";
    const condition3 = produto.valor != null && produto.valor != undefined;
    const condition4 = produto.marca != null && produto.marca != undefined;
    const condition5 = produto.modelo != null && produto.modelo != undefined;
    const condition6 = produto.tamanho != null && produto.tamanho != undefined;
    const condition7 =
      produto.categoria != null && produto.categoria != undefined;
    const condition8 =
      produto.fornecedor != null && produto.fornecedor != undefined;

    if (
      condition0 &&
      condition1 &&
      condition2 &&
      condition3 &&
      condition4 &&
      condition5 &&
      condition6 &&
      condition7 &&
      condition8
    ) {
      const formData = new FormData();

      /**
       * monta o objeto para enviar via form-data
       * para o backend
       */
      formData.append("produto", JSON.stringify(produto));
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
        return console.log("response :", response);
      });
    }
    return setShowMessage(true);
  };

  return {
    label,
    marcasOptions,
    modelosOptions,
    categoriasOptions,
    fornecedoresOptions,
    produto,
    setProduto,
    tamanhos,
    inputRef,
    showMessage,
    setShowMessage,
    modalStyle,
    handleClick,
    handleFileChange,
    handleChange,
    handleChangeNumber,
    handleCancel,
    handleRegister,
    images,
  };
};

export default useFormProduto;
