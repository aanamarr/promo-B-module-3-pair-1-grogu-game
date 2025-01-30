import React from 'react'

function Form({ setName }) {

    const handleChange = (ev) => { //crea una función manejadora llamada handleChange que reciba un evento para el form
        setName(ev.target.value);//cambia el valor de name por el valor del input
    };

    return (
        <form className="form">
            <label htmlFor="name">Introduce tu nombre para jugar:</label>
            <input type="text" id="name" name="name" required onChange={handleChange} />
        </form>
    );
}

export default Form;