import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ModelosApi from "../../../../../api/Modelos";
import {
  Modelos,
  IColumns,
  IPageRequest,
  IActionButtons,
} from "../../../../../types/common.types";

const useMenuModelos = () => {
  const { listModelos, addNewModelo } = ModelosApi();
  const navigate = useNavigate();
  const actions: IActionButtons = {
    view: false,
    edit: false,
    disable: true,
  };
  const [pageable, setPageable] = useState<IPageRequest>({
    filter: "",
    pageSize: 3,
    currentPage: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [list, setList] = useState<Modelos[]>([]);
  const [isToAddNewModelo, setIsToAddNewModelo] = useState<boolean>(false);
  const [newModelo, setNewModelo] = useState<string>("");

  const columns: IColumns[] = [
    {
      title: "Nome",
      name: "nome",
    },
  ];

  useEffect(() => {
    listModelos(pageable)
      .then((response) => {
        setHasMore(response.content.length > 0);
        return setList([...list, ...response.content]);
      })
      .finally(() => {
        return setLoading(false);
      });
  }, [pageable]);

  const saveNewModelo = (newModelo: string) => {
    addNewModelo(newModelo).then(() => {
      window.location.reload();
    })
  }

  return {
    actions,
    columns,
    list,
    setList,
    loading,
    hasMore,
    setPageable,
    navigate,
    isToAddNewModelo,
    setIsToAddNewModelo,
    newModelo,
    setNewModelo,
    saveNewModelo
  };
};

export default useMenuModelos;
