import React from 'react'
//agregamos la prop name para que salga el nombre del jugador en el header y pasamos prop name a Header de la App.jsx
function Header({name}) {
  return (
    <header>
        <h1>¡{name} Cuidado con Grogu!</h1>
    </header>
  )
}

export default Header;