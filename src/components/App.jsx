
import React, { useEffect } from 'react'; // hay que importar React antes de los otros componentes para poder usar JSX
import { useState } from 'react';
import '../styles/App.scss';
import Home from './Home';
import Header from './Header';
import Board from './Board';
import Dice from './Dice';
import Form from './Form';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Instructions from './Instructions';
import Options from './Options';

function App() {
  const [name, setName] = useState(''); //creamos un estado para el nombre del jugador
  return (
    <>
    <Header name={name} />
    <Routes>
      <Route path="/instructions" element={<Instructions/>}/>
      <Route path="/options" element={<Options/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;


//cuando quieres recoger un elemento (escuchar un evento) y modificarlo en el DOM, hace falta variables de estado