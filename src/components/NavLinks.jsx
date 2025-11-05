import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>

        <li>
          <NavLink to="/register">Registro</NavLink>
        </li>

        <li>
          <NavLink to="/products">Productos</NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavLinks;
