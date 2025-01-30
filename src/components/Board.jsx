import React, { useState } from 'react'
import Grogu from './Grogu'

function Board({groguPosition}) {
  const listCell = useState(Array(7).fill(null))[0];

  const newListCell = listCell.map((_, index) => (
    <div key={index} className="cell">
      {index === groguPosition ? <Grogu/> : null} {/*si índice === posición de Grogu, renderizamos el componente <Grogu>, sino la casilla queda vacia (null)*/}
    </div>
  ));
  return (
    <section className="board">
      {newListCell}
    </section>
  );
}

{/* <div className="cell"><Grogu/></div>

        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>*/}
export default Board;