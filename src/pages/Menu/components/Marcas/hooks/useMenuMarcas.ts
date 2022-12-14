import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MarcasApi from "../../../../../api/Marcas";
import {
  Marcas,
  IColumns,
  IPageRequest,
  IActionButtons,
} from "../../../../../types/common.types";
import toast from "react-hot-toast";

const useMenuMarcas = () => {

  const { id, mode } = useParams();
  const { listMarcas, disableMarcas } = MarcasApi();
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

  const handleShowFormNewMarca = (isToAdd: boolean) => {
    if (!isToAdd) {
      setIsToAddNewMarca(isToAdd);
      setNewMarca((prevState) => ({
        ...prevState,
        nome: "",
      }));
    }
    setIsToAddNewMarca(isToAdd);
  };

  const handleShowFormEditModelo = (isToAdd: boolean) => {
    if (!isToAdd) {
      setIsToEditNewMarca(isToAdd);
      setNewMarca((prevState) => ({
        ...prevState,
        nome: "",
      }));
    }
    setIsToEditNewMarca(isToAdd);
  };

  useEffect(() => {
    if (mode === 'disable' && id) {
      disableMarcas(id).then((response) => {
        toast.success(response);
        setList([]);
        setPageable({ ...pageable, currentPage: 0 });
        return navigate('./');
      });
    }
    listMarcas(pageable)
      .then((response) => {
        setHasMore(response.content.length > 0);
        return setList([...list, ...response.content]);
      })
      .finally(() => {
        return setLoading(false);
      });
  }, [pageable, id]);

  const handleEdit = (marca: Marcas) => {
    setNewMarca((prevState) => ({
      ...prevState,
      id: marca.id,
      nome: marca.nome,
      isActive: true,
    }));
    setIsToEditNewMarca(true);
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
    handleShowFormNewMarca,
    handleShowFormEditModelo,
    handleEdit,
    isToEditNewMarca, 
    setIsToEditNewMarca
  };
};

export default useMenuMarcas;
