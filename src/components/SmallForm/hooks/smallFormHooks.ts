import { useNavigate } from "react-router-dom";
import CommonApi from "../../../api/Common";

const useSmallForm = () => {
  const { post } = CommonApi();
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

  return {
    handleNewData,
  };
};

export default useSmallForm;
