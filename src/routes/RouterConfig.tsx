import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Categorias from '../pages/Categorias';
import Login from '../pages/Login';
import Produtos from '../pages/Produtos';
import PrivateRoutes from './PrivateRoutes';

const RouterConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
        <Route element={<PrivateRoutes />} >
          <Route path='/menu' element={<Layout />}>
            <Route path='produtos' element={<Produtos />} />
            <Route path='categorias' element={<Categorias />} />
          </Route>
        </Route>
    </Routes>
  );
};

export default RouterConfig;
