import React, { useState } from 'react'
import Grogu from './Grogu'

function Board() {
  const [listCell, setListCell] = useState (Array (7).fill(null));
  const newListCell = listCell.map((cell,index) =>
    <div key = {index} className="cell">{cell}</div>
  );
  return (
    <section className="board">
      {newListCell}
       {/* <div className="cell"><Grogu/></div>

        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>*/}
    </section>
  )
}

export default Board