import { Outlet, useParams } from "react-router-dom";
import Banners from "./components/Banners";
import Categorias from "./components/Categorias";
import Fornecedores from "./components/Fornecedores";
import Marcas from "./components/Marcas";
import Modelos from "./components/Modelos";
import Produtos from "./components/Produtos";

const Menu = () => {

    const { module } = useParams();
    
    return (
        <>
            {
                module === 'banners' && <Banners />
            }
            {
                module === 'categorias' && <Categorias />
            }
            {
                module === 'fornecedores' && <Fornecedores />
            }
            {
                module === 'marcas' && <Marcas />
            }
            {
                module === 'modelos' && <Modelos />
            }
            {
                module === 'produtos' && <Produtos />
            }
            <Outlet />
        </>
    );
};

export default Menu;
