
import { useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Board from './Board';

function App() {
  //creamos la variable de estado que nos indica en qué posición está grogu
  const [groguPosition, setGroguPosition] = useState(0)
  //el valor incial es el número de la posición en el array del board

  //creamos la variable de estado para cada mercancía
  const [cookiesList, setCookiesList] = useState(["🍪","🍪","🍪"])
  const [eggsList, seteggsList] = useState(["🥚","🥚","🥚"])
  const [frogsList, setfrogsList] = useState(["🐸","🐸","🐸"])
  //los valores iniciales son las listas (arrays) llenas
  
  //creamos la variable para el resultado del dado
  const [diceResult, setDiceResult] = useState(0)

  //crear variable del estado del juego!!!

  //Implementa la función rollDice en App.js
  const randomNumber = rollDice(4);
  const rollDice = (max) => { 
    return Math.ceil(Math.random() * max);
    console.log()
  }

  /* //esta función me genera un número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }  
//esta función me traduce ese número a la acción 'piedra, papel o tijera'
function numberToAction (){
    //guardo el número aleatorio (máximo 9) que me ha creado la función
    const randomNumber = getRandomNumber(9);
    console.log (randomNumber)
    //si el número es menor o igual a tres lo voy a guardar con la palabra 'piedra'...
    if (randomNumber <= 3) {
        return 'rock'
    } else if (randomNumber >= 7) {
        return 'paper'
    } else {
        return 'scissors'
    }
} */

  return (
    <>
    <Header/>
    <main className="page">
    <Board/>

      <section>
        <button className="dice">Lanzar Dado</button>
        <div className="game-status">En curso</div>
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