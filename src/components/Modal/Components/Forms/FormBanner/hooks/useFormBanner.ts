import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import BannersApi from "../../../../../../api/Banners";
import { actionFile, FormFunction } from "../../FormProduto/types";
import { BannerRequest, IUseFormBannerProps, IValidationBanner, TipoDeBanner } from "../types";

const useFormBanner = (props: IUseFormBannerProps) => {

  const { insertBanner, getBanner, updateBanner, removeBannerImage } = BannersApi();
  const navigate = useNavigate();
  const [showMessageEmptyFields, setShowMessageEmptyFields] = useState<boolean>(false);
  const [showMessageLimitFiles, setShowMessageLimitFiles] = useState<boolean>(false);
  const [banner, setBanner] = useState<BannerRequest>(
    {
      nome: "",
      tipo: null,
      imagens: "",
    }
  );
  const [images, setImages] = useState<any[]>([]);

  const options = [
    TipoDeBanner.DESTAQUE,
    TipoDeBanner.COLECAO
  ];

  const validations: IValidationBanner = {
    nome: {
      required: true,
    },
    tipo: {
      required: true,
    },
  };

  /**
   * style do modal de aviso
   */
  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "background.paper",
    overflow: "auto",
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  };

  useEffect(() => {
    if (props.id) {
      getBanner(props.id).then((response: any) => {
        if (response.imageNames != null) {
          setImages(response.imageNames.map((image: string) => { return { name: image } }))
        }
        return setBanner(response);
      })
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBanner({ ...banner, [event.target.name]: event.target.value })
  };

  const handleCancel = () => {
    navigate("../")
  };

  const handleValidate = (banner: BannerRequest, images: any[]) => {
    let valid = true;

    if (images.length <= 0) {
      valid = false;
    }
    if (validations.nome.required && !banner.nome) {
      valid = false;
    }
    if (validations.tipo.required && !banner.tipo) {
      valid = false;
    }

    return valid;
  };

  const handleRegister = () => {
    if (handleValidate(banner, images)) {
      const formData = new FormData();
      formData.append("banner", JSON.stringify(banner));
      images.forEach((image) => {
        formData.append("images", image);
      });

      if (props.mode === FormFunction.new) {
        insertBanner(formData).then((response) => {
          toast.success(response);
          navigate("../");
        }).catch(() => {
          toast.error("Ocorreu um Erro!");
        });
      }
      if (props.mode === FormFunction.edit) {
        if (props.id) {
          updateBanner(formData, props.id).then(() => {
            toast.success("Editado Com Sucesso!");
            navigate("../");
          }).catch(() => {
            toast.error("Ocorreu um Erro!");
          })
        }
      }
    } else {
      setShowMessageEmptyFields(true)
    }
  };

  const handleFileChange = (event: any, action: actionFile, index?: number) => {
    if (action === actionFile.add && images.length < 5) {
      const fileObj = event.target.files && event.target.files[0];
      if (!fileObj) {
        return;
      }
      event.target.value = null;
      setImages([...images, fileObj]);
    } else if (action === actionFile.remove && index !== null) {
      if (props.mode == FormFunction.edit) {
        const imageName = images.find((e, position) => position === index);
        if (props.id) {
          removeBannerImage(imageName.name, props.id).then(() => {
            setImages(images.filter((e, position) => position !== index));
          });
        }
      };
      return setImages(images.filter((e, position) => position !== index));
    }
  };

  return {
    banner,
    images,
    options,
    modalStyle,
    showMessageEmptyFields,
    handleChange,
    handleCancel,
    handleRegister,
    handleFileChange,
    setShowMessageEmptyFields,
    showMessageLimitFiles,
    setShowMessageLimitFiles
  };
};

export default useFormBanner;
