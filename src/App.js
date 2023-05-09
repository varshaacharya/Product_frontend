import logo from './logo.svg';
import './App.css';
import MainRoutes from './Routes';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MainRoutes/>
    </div>
  );
}

export default App;
