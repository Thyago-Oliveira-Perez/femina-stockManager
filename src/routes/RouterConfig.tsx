import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import PrivateRoutes from './PrivateRoutes';

const RouterConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
        <Route element={<PrivateRoutes />} >
          <Route element={<Layout />}>
            <Route path='/menu' element={<Menu />} />
          </Route>
        </Route>
    </Routes>
  );
};

export default RouterConfig;
