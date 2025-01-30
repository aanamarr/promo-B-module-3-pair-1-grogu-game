import React from 'react'

function Dice({onRollDice}) {
    const handleDice = () => {
        onRollDice();
    }
  return (
    <button className="dice" onClick={handleDice}>Lanzar Dado 🎲</button>
  )
}

export default Dice;