import React from 'react'

function Dice({ onRollDice }) {
  const handleRoll = () => {
    if (onRollDice) {
      onRollDice();
    }
  };
  return (
    <button className="dice" onClick={handleRoll}>Lanzar Dado 🎲</button>
  );
}

export default Dice;