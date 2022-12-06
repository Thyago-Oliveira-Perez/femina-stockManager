import CommonApi from "../../../api/Common";
import { Endpoints } from "../types";

const useSmallForm = () => {
  const { post } = CommonApi();

  const handleError = (error: any) => {
    return Promise.reject(error.response);
  };

  const handleNewData = async (newData: string, endpoint: string) => {
    if (newData.trim().length > 0) {
      try {
        return await post(newData, `${"api/"}${endpoint}`).then(() => {
          window.location.reload();
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
