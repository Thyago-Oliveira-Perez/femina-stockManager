import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import PrivateRoutes from "./PrivateRoutes";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<PrivateRoutes />} >
        <Route path='/menu' element={<Menu />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
