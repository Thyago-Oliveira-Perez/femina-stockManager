import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoriasApi from "../../../../../api/Categorias";
import {
  Categorias,
  IActionButtons,
  IColumns,
  IPageRequest,
} from "../../../../../types/common.types";

const useMenuCategorias = () => {
  const { listCategorias } = CategoriasApi();
  const navigate = useNavigate();
  const actions: IActionButtons = {
    view: false,
    edit: false,
    disable: true,
  };
  const [pageable, setPageable] = useState<IPageRequest>({
    filter: "",
    pageSize: 4,
    currentPage: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [list, setList] = useState<Categorias[]>([]);
  const [isToAddNewCategoria, setIsToAddNewCategoria] = useState<boolean>(false);
  const [newCategoria, setNewCategoria] = useState<string>("");
  
  
  const columns: IColumns[] = [
    {
      title: "Nome",
      name: "nome",
    },
  ];
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategoria(event.target.value);
  };

  const showFormNewCategoria = (isToAdd: boolean) => {
    if (!isToAdd) {
      setIsToAddNewCategoria(isToAdd);
      setNewCategoria("");
    }
    setIsToAddNewCategoria(isToAdd);
  };

  useEffect(() => {
    listCategorias(pageable)
      .then((response) => {
        setHasMore(response.content.length > 0);
        return setList([...list, ...response.content]);
      })
      .finally(() => {
        return setLoading(false);
      });
  }, [pageable]);

  return {
    actions,
    columns,
    list,
    loading,
    hasMore,
    setPageable,
    navigate,
    isToAddNewCategoria,
    setIsToAddNewCategoria,
    newCategoria,
    handleChange,
    showFormNewCategoria
  };
};

export default useMenuCategorias;
