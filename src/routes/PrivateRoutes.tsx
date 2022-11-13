import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../services/auth.service';

const PrivateRoutes = () => {
  return (
    isAuthenticated() ? <Outlet /> : <Navigate to='/' />
  );
};

export default PrivateRoutes;
