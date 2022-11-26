import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import  Register  from './pages/Register';
import { ReactDOM } from 'react-dom/client';



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Header />} />
          <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
