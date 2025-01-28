
import { useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Board from './Board';
import Dice from './Dice';

function App() {
  //creamos la variable de estado que nos indica en qué posición está grogu
  const [groguPosition, setGroguPosition] = useState(0)
  //el valor incial es el número de la posición en el array del board

  //creamos la variable de estado para cada mercancía
  const [cookiesList, setCookiesList] = useState(["🍪","🍪","🍪"])
  const [eggsList, setEggsList] = useState(["🥚","🥚","🥚"])
  const [frogsList, setFrogsList] = useState(["🐸","🐸","🐸"])
  //los valores iniciales son las listas (arrays) llenas
  
  //creamos la variable para el resultado inicial del dado
  const [diceResult, setDiceResult] = useState(0)

  // Estado del juego
  const [gameStatus, setGameStatus] = useState("En curso");


  //Implementa la función rollDice para generar un número aleatorio entre 1 y 4 nº aleatorio de 1-4

  const rollDice = () => {
    const randomNumber = Math.ceil(Math.random() * 4);
    setDiceResult(randomNumber);

    console.log(randomNumber);
    
    if (randomNumber === 4) {
      //si el dado es 4, Grogu avanza una posición
      const newPosition = groguPosition + 1;
      setGroguPosition(newPosition);
      setGameStatus(`¡Grogu avanza a la posición ${newPosition}!`);
      console.log(newPosition);
    } else if (eggsList.length > 0|| frogsList.length > 0|| cookiesList.length > 0){
      //La siguiente acción se ejecuta sólo si las listas son mayores a 0 (no están vacías)
      //Si es un número distinto de 4, Grogu pierde mercancia
      if (randomNumber === 1) {
        //si el dado es 1, Grogu pierde una galleta etc.
        const newCookiesList = cookiesList.slice(0, -1);
        setCookiesList(newCookiesList);
        setGameStatus("¡Grogu pierde una galleta!");
        console.log(newCookiesList);
      } else if (randomNumber === 2) {
        const newEggsList = eggsList.slice(0, -1);
        setEggsList(newEggsList);
        setGameStatus("¡Grogu pierde un huevo!");
        console.log(newEggsList);
      } else if (randomNumber === 3) {
        const newFrogsList = frogsList.slice(0, -1);
        setFrogsList(newFrogsList);
        setGameStatus("¡Grogu pierde una rana!");
        console.log(newFrogsList);
      };
    }
  }

  return (
    <>
    <Header/>
    <main className="page">
    <Board/>

      <section>
        <Dice onRollDice={rollDice}/>
        <div className="game-status">{gameStatus}</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
    </>
  );
}

export default App;


//cuando quieres recoger un elemento (escuchar un evento) y modificarlo en el DOM, hace falta variables de estado