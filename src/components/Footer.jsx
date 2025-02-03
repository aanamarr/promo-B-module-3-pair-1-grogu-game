import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
        <NavLink >
        <nav>
            <ul>
                <li className="footer__menu-item">
                    <a className="footer__menu-link" href="#/">A jugar</a>
                </li>
                <li className="footer__menu-item">
                    <a className="footer__menu-link active" href="#/instructions"
                        >¿Cómo se juega?</a
                        >
                </li>
                <li className="footer__menu-item">
                    <a className="footer__menu-link" href="#/options">Más opciones</a>
                </li>
            </ul>
        </nav>
        </NavLink>
        
        <small className="footer__copy">© Adalab</small>
    </footer> 
    );
}

export default Footer