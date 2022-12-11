import { useNavigate } from "react-router-dom";
import CommonApi from "../../../api/Common";
import { Marcas } from "../../../types/common.types";

const useSmallForm = () => {
  const { post, update} = CommonApi();
  const navigate = useNavigate();
  
  const handleError = (error: any) => {
    return Promise.reject(error.response);
  };

  const handleNewData = async (newData: string, endpoint: string) => {
    if (newData.trim().length > 0) {
      try {
        return await post(newData, `${"api/"}${endpoint}`).then(() => {
          navigate(0);
        });
      } catch (error: any) {
        return handleError(error);
      }
    }
  };

  const handleEditData = async (marca: Marcas, endpoint: string) => {
    if (marca.nome.trim().length > 0) {
      try {
        return await update(marca, `${marca.id}`, `api/${endpoint}/edit`).then(() => {
          navigate(0);
        });
      } catch (error: any) {
        return handleError(error);
      }
    }
  };

  return {
    handleNewData,
    handleEditData
  };
};

export default useSmallForm;
