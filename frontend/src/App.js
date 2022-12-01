import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'
import { ReactDOM } from 'react-dom/client';



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Header />} />
          <Route path='register' element={<Register />} />
          <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
