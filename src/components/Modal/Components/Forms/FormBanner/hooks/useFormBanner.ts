import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import BannersApi from "../../../../../../api/Banners";
import { actionFile, FormFunction } from "../../FormProduto/types";
import { BannerRequest, IUseFormBannerProps, TipoDeBanner } from "../types";

const useFormBanner = (props: IUseFormBannerProps) => {
  const { insertBanner, getBanner, updateBanner, removeBannerImage } = BannersApi();
  const navigate = useNavigate();
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
  ]

  useEffect(() => {
    if (props.id) {
      getBanner(props.id).then((response: any) => {
        if (response.imageNames != null) {
          setImages(response.imageNames.map((image: string) => { return {name: image} }))
        }
        return setBanner(response);
      })
    }
  }, [])

  console.log(banner)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBanner({ ...banner, [event.target.name]: event.target.value })
  };

  const handleCancel = () => {
    navigate("../")
  };

  const handleRegister = () => {
    const formData = new FormData();
    formData.append("banner", JSON.stringify(banner));
    images.forEach((image) => {
      formData.append("images", image);
    });
    
    if (props.mode === FormFunction.new) {
      insertBanner(formData).then((response) => {
        toast.success(response);
      }).catch((error) => {
        toast.error(error);
      });
    }
    if (props.mode === FormFunction.edit) {
      if(props.id) {
        updateBanner(formData, props.id).then(() => {
          toast.success("Editado Com Sucesso!");
        }).catch(() => {
          toast.error("Ocorreu um Erro!");
        })
      }
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
      if(props.mode == FormFunction.edit) {
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
    handleChange,
    handleCancel,
    handleRegister,
    handleFileChange
  };
};

export default useFormBanner;
