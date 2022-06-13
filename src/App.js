import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "./grid.css"
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App px-md-5 px-3">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
