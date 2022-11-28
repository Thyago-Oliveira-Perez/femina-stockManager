import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
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
          </Route>
        </Route>
    </Routes>
  );
};

export default RouterConfig;
