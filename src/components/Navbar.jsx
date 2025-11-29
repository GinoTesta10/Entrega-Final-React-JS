// Navbar.jsx
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Navbar = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav
      style={{
        backgroundColor: "#F0A500",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          color: "#1B1A17",
          textDecoration: "none",
          fontSize: "24px",
          fontFamily: "BBH Sans Bartle",
          fontWeight: 400,
        }}
      >
        DAMN Shuz
      </Link>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link
          to="/cart"
          style={{
            color: "#F0A500",
            textDecoration: "none",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            position: "relative",
            backgroundColor: "#1B1A17",
            padding: "15px",
            borderRadius: "5%",
          }}
        >
          🛒
          {totalItems > 0 && (
            <span
              style={{
                color: "#F0A500",
                borderRadius: "10%",
                padding: "2px 8px",
                fontSize: "15px",
                fontWeight: "bold",
                minWidth: "20px",
                textAlign: "center",
              }}
            >
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
