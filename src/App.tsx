import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
