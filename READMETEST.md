¿Qué es <NavLink>?
<NavLink> es un componente de React Router que se utiliza para crear enlaces de navegación internos en una aplicación de React. La diferencia principal con <Link> es que <NavLink> añade automáticamente una clase llamada active al enlace que está actualmente activo, lo cual te permite aplicarle estilos especiales usando CSS.

3. Estructura del Footer:

<nav>
  <ul>
    <li className="footer__menu-item">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "footer__menu-link active" : "footer__menu-link"}
      >
        A jugar
      </NavLink>
    </li>
*to="/": Define la ruta a la que te llevará el enlace. En este caso, te lleva a la página principal.
*<className={({ isActive }) => ... }: Esta parte es clave. NavLink nos da acceso a una propiedad llamada <isActive>, que indica si el enlace está activo (es decir, si corresponde con la URL actual).
    -> Si está activo (isActive === true), aplicamos las clases footer__menu-link active para darle estilos especiales al enlace.
    -> Si no está activo, solo aplicamos footer__menu-link.


4. Cómo Funciona la Clase "active":

Cuando haces clic en un enlace, React Router actualiza la URL. Si la URL coincide con el valor de to del enlace, React Router añade automáticamente la clase active.

***Por ejemplo:

Si estás en http://localhost:3000/instructions, el enlace con <to="/instructions"> tendrá la clase active.
En tu CSS, puedes definir estilos especiales para .active:
<css:
.footer__menu-link.active {
  color: yellow;
  font-weight: bold;
}>

***Ventajas de Usar <NavLink>

-No necesitas gestionar manualmente qué enlace está activo.
-Simplifica la lógica para aplicar estilos dinámicos.
-Se integra perfectamente con React Router para una navegación fluida.