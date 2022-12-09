import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import BannersApi from "../../../../../../api/Banners";
import { actionFile } from "../../FormProduto/types";
import { BannerRequest, IUseFormBannerProps, TipoDeBanner } from "../types";

const useFormBanner = (props: IUseFormBannerProps) => {
    const { insertBanner } = BannersApi();
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBanner({...banner, [event.target.name]: event.target.value})
    };

    const handleCancel = () => {
        navigate("../")
    };

    const handleRegister = () => {
        const formData = new FormData();
        formData.append('banner', JSON.stringify(banner));
        images.forEach((image) => {
            formData.append("images", image);
          });
        insertBanner(formData).then((response) => {
            toast.success(response);
        }).catch((error) => {
            
        })
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
          setImages(images.filter((e, position) => position !== index));
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
