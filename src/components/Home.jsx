import React, { useEffect, useState } from 'react'; // hay que importar React antes de los otros componentes para poder usar JSX
import Board from './Board';
import Dice from './Dice';
import Form from './Form';

function Home() {
    const [name, setName] = useState(''); //creamos un estado para el nombre del jugador
    const [groguPosition, setGroguPosition] = useState(0); //creamos un estado para la posición de Grogu
    const [gameStatus, setGameStatus] = useState(''); //creamos un estado para el estado del juego
    const [cookiesList, setCookiesList] = useState(["🍪", "🍪", "🍪"]); //creamos un estado para las galletas
    const [eggsList, setEggsList] = useState(["🥚", "🥚", "🥚"]); //creamos un estado para los huevos
    const [frogsList, setFrogsList] = useState(["🐸", "🐸", "🐸"]); //creamos un estado para las ranas
    const [diceResult, setDiceResult] = useState(0); //creamos un estado para el resultado del dado
  
    const rollDice = () => {
      const randomNumber = Math.ceil(Math.random() * 4);
      setDiceResult(randomNumber);
  
      console.log(`Dado: ${randomNumber}`);
      
      if (randomNumber === 4) {
        //si el dado es 4, Grogu avanza una posición
        const newPosition = groguPosition + 1;
        setGroguPosition(newPosition);
        setGameStatus(`¡Grogu avanza a la posición ${newPosition}!`);
        console.log("Grogu avanza:", newPosition);
        
      } else if (eggsList.length > 0 || frogsList.length > 0 || cookiesList.length > 0) {
        //La siguiente acción se ejecuta sólo si las listas son mayores a 0 (no están vacías)//Si es un número distinto de 4, Grogu pierde mercancia
        if (randomNumber === 1) {
          //si el dado es 1, Grogu pierde una galleta etc.
          const newCookiesList = cookiesList.slice(0, -1);
          setCookiesList(newCookiesList);
          setGameStatus(`¡${name} has ayudado a Mando a recoger una galleta!`);
          console.log("Galletas restantes:", newCookiesList);
        } else if (randomNumber === 2) {
          const newEggsList = eggsList.slice(0, -1);
          setEggsList(newEggsList);
          setGameStatus(`¡${name} has ayudado a Mando a recoger un huevo!`);
          console.log("Huevos restantes:", newEggsList);
        } else if (randomNumber === 3) {
          const newFrogsList = frogsList.slice(0, -1);
          setFrogsList(newFrogsList);
          setGameStatus(`¡${name} has ayudado a Mando a recoger una rana!`);
          console.log("Ranas restantes:", newFrogsList);
        }
      }
    };

  useEffect(
    () =>{
    if (groguPosition < 6 && eggsList.length === 0 && frogsList.length === 0 && cookiesList.length === 0){
      setGameStatus("Ganaste, Mando completa la misión") 
    } else if(groguPosition >= 6){
      setGameStatus("¡¡Grogu se ha comido el cargamento!! Has perdido") 
    }
  }, [groguPosition, eggsList, frogsList, cookiesList]);

  return (
    <>
      <Form name={name} setName={setName} /> {/*pasamos la función setName como prop al Form */}
      <Board groguPosition={groguPosition} /> {/*pasamos la posición de Grogu como prop*/}

      <section>
        <Dice onRollDice={rollDice} /> {/*pasamos la función rollDice como prop*/}
        <div className="game-status">{gameStatus}</div> {/*mostramos el estado del juego*/}
      </section>

      <section className="goods-container">
        {cookiesList.map((cookie, index) => (
          <div key={index} className="goods-item">{cookie}</div>
        ))}
      </section>
      <section className="goods-container">
        {eggsList.map((egg, index) => (
          <div key={index} className="goods-item">{egg}</div>
        ))}
      </section>
      <section className="goods-container">
        {frogsList.map((frog, index) => (
          <div key={index} className="goods-item">{frog}</div>
        ))}
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </>
  );
}

export default Home;