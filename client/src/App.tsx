import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Proyects from './Components/Proyects/Proyects';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/proyects' element={<Proyects/>}/>
        <Route path='/techs' element={<Skills/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
