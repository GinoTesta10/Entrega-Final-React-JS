import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <p
        style={{ display: "flex", justifyContent: "center", color: "#F0A500" }}
      >
        No hay productos disponibles
      </p>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: "#F0A500",
            color: "#1B1A17",
          }}
        >
          <img
            src={item.img}
            alt={item.name}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <h3>{item.name}</h3>

          <Link
            to={`/item/${item.id}`}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
              padding: "10px",
              backgroundColor: "#1B1A17",
              color: "#F0A500",
              textAlign: "center",
              textDecoration: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Ver detalles
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
