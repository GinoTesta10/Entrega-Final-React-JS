import Cartwidget from "./cartwidget";
import styles from "./Navbar.module.css";
import NavLinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.h1}>Mi tienda</h1>
      <NavLinks />
      <Cartwidget />
    </nav>
  );
};
export default Navbar;
