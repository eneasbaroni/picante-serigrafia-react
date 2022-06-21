import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "./grid.css"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Galeria from './components/Galeria/Galeria';
import SubGaleriaContainer from './components/SubGaleria/SubGaleriaContainer';
import Presupuesto from './components/Presupuesto/Presupuesto';

function App() {
  return (
    <div className="App px-md-5 px-3">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />  
          <Route path='/home' element={<Home/>} />  
          <Route path='/galeria' element={<Galeria/>} />  
          <Route path='/galeria/:galery' element={<SubGaleriaContainer/>} />  
          <Route path='/presupuesto' element={<Presupuesto/>} />  
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
