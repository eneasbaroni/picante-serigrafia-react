import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "./grid.css"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Galeria from './components/Galeria/Galeria';
import SubGaleriaContainer from './components/SubGaleria/SubGaleriaContainer';
import Presupuesto from './components/Presupuesto/Presupuesto';
import EmailSuccess from './components/EmailSuccess/EmailSuccess';
import Feria from './components/Feria/Feria';
import FeriaFormulario from './components/FeriaFormulario/FeriaFormulario';
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';


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
          <Route path='/success' element={<EmailSuccess/>} />  
          <Route path='/feria' element={<Feria/>} />  
          <Route path='/feria-formulario' element={<FeriaFormulario/>} />  
          <Route path='/nosotros' element={<Nosotros/>} />  
          <Route path='/contacto' element={<Contacto/>} />  
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
