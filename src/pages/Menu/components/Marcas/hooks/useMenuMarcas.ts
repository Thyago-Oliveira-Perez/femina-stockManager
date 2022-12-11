import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MarcasApi from "../../../../../api/Marcas";
import {
  Marcas,
  IColumns,
  IPageRequest,
  IActionButtons,
} from "../../../../../types/common.types";

const useMenuMarcas = () => {
  const { listMarcas } = MarcasApi();
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
  const [list, setList] = useState<Marcas[]>([]);
  const [isToAddNewMarca, setIsToAddNewMarca] = useState<boolean>(false);
  const [isToEditNewMarca, setIsToEditNewMarca] = useState<boolean>(false);
  const [newMarca, setNewMarca] = useState<Marcas>({
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
    setNewMarca((prevState) => ({
      ...prevState,
      nome: event.target.value,
      isActive: true,
    }));
  };

  const showFormNewMarca = (isToAdd: boolean) => {
    if (!isToAdd) {
      setIsToAddNewMarca(isToAdd);
      setNewMarca((prevState) => ({
        ...prevState,
        nome: "",
      }));
    }
    setIsToAddNewMarca(isToAdd);
  };

  useEffect(() => {
    listMarcas(pageable)
      .then((response) => {
        setHasMore(response.content.length > 0);
        return setList([...list, ...response.content]);
      })
      .finally(() => {
        return setLoading(false);
      });
  }, [pageable]);

  const handleEdit = (marca: Marcas) => {
    setNewMarca((prevState) => ({
      ...prevState,
      id: marca.id,
      nome: marca.nome,
      isActive: true,
    }));
    setIsToEditNewMarca(true);
    console.log(marca);
  };

  return {
    actions,
    columns,
    list,
    loading,
    hasMore,
    setPageable,
    navigate,
    isToAddNewMarca,
    setIsToAddNewMarca,
    newMarca,
    handleChange,
    showFormNewMarca,
    handleEdit,
    isToEditNewMarca, 
    setIsToEditNewMarca
  };
};

export default useMenuMarcas;
