
import { useState } from 'react';
import '../styles/App.scss';

function App() {
  //creamos la variable de estado que nos indica en qué posición está grogu
  const [groguPosition, setGroguPosition] = useState(0)
  //el valor incial es el número de la posición en el array del board

  //creamos la variable de estado para cada mercancía
  const [cookiesList, setCookiesList] = useState(["🍪","🍪","🍪"])
  const [eggsList, seteggsList] = useState(["🥚","🥚","🥚"])
  const [frogsList, setfrogsList] = useState(["🐸","🐸","🐸"])
  //los valores iniciales son las listas (arrays) llenas
  
  return (
    <>
    <header>
      <h1>¡Cuidado con Grogu!</h1>
    </header>
    <main className="page">
      <section className="board">
        <div className="cell"><div className="grogu">👣</div></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>

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