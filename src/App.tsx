import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './routes/RouterConfig';

function App() {
  return (
    <BrowserRouter>
      <RouterConfig />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    </BrowserRouter>
  );
};

export default App;
