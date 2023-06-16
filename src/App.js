import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
