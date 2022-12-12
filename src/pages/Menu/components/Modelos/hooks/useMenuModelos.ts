import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ModelosApi from "../../../../../api/Modelos";
import {
  Modelos,
  IColumns,
  IPageRequest,
  IActionButtons,
} from "../../../../../types/common.types";
import toast from "react-hot-toast";

const useMenuModelos = () => {

  const { id, mode } = useParams();
  const { listModelos, disableModelos } = ModelosApi();
  const navigate = useNavigate();
  const actions: IActionButtons = {
    view: false,
    edit: true,
    disable: true,
  };
  const [pageable, setPageable] = useState<IPageRequest>({
    filter: "",
    pageSize: 4,
    currentPage: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [list, setList] = useState<Modelos[]>([]);
  const [isToAddNewModelo, setIsToAddNewModelo] = useState<boolean>(false);
  const [isToEditNewModelo, setIsToEditNewModelo] = useState<boolean>(false);
  const [newModelo, setNewModelo] = useState<Modelos>({
    nome: "",
    isActive: true,
  });

  const columns: IColumns[] = [
    {
      title: "Nome",
      name: "nome",
    },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewModelo((prevState) => ({
      ...prevState,
      nome: event.target.value,
      isActive: true,
    }));
  };

  const handleShowFormNewModelo = (isToAdd: boolean) => {
    if (!isToAdd) {
      setIsToAddNewModelo(isToAdd);
      setNewModelo((prevState) => ({
        ...prevState,
        nome: "",
      }));
    }
    setIsToAddNewModelo(isToAdd);
  };

  const handleShowFormEditModelo = (isToAdd: boolean) => {
    if (!isToAdd) {
      setIsToEditNewModelo(isToAdd);
      setNewModelo((prevState) => ({
        ...prevState,
        nome: "",
      }));
    }
    setIsToEditNewModelo(isToAdd);
  };

  useEffect(() => {
    if (mode === 'disable' && id) {
      disableModelos(id).then((response) => {
        toast.success(response);
        setList([]);
        setPageable({ ...pageable, currentPage: 0 });
        return navigate('./');
      });
    }
    listModelos(pageable)
      .then((response) => {
        setHasMore(response.content.length > 0);
        return setList([...list, ...response.content]);
      })
      .finally(() => {
        return setLoading(false);
      });
  }, [pageable, id]);

  const handleEdit = (marca: Modelos) => {
    setNewModelo((prevState) => ({
      ...prevState,
      id: marca.id,
      nome: marca.nome,
      isActive: true,
    }));
    setIsToEditNewModelo(true);
  };

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
    handleChange,
    handleShowFormNewModelo,
    handleShowFormEditModelo,
    isToEditNewModelo,
    setIsToEditNewModelo,
    handleEdit
  };
};

export default useMenuModelos;
