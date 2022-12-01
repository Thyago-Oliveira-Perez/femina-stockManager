import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../pages/Login';
import PrivateRoutes from './PrivateRoutes';
import Menu from '../pages/Menu';
import Modal from '../components/Modal';
import { FormFunction } from '../components/Modal/Components/Forms/FormProduto/types';

const RouterConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
        <Route element={<PrivateRoutes />} >
          <Route path='menu' element={<Layout />}>
            <Route path=':module' element={<Menu />}>
              <Route path='new' element={<Modal function={FormFunction.new} />} />
              <Route path='view/:id' element={<Modal function={FormFunction.view} />} />
              <Route path='edit/:id' element={<Modal function={FormFunction.edit} />} />
              <Route path='disable/:id' element={<></>} />
            </Route> 
          </Route>
        </Route>
    </Routes>
  );
};

export default RouterConfig;
