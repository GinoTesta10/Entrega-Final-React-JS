import Cartwidget from "./cartwidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.h1}>Mi tienda</h1>
      <ul className={styles.list}>
        <li>Inicio</li>
        <li>Registro</li>
        <li>Productos</li>
      </ul>
      <Cartwidget />
    </nav>
  );
};
export default Navbar;
