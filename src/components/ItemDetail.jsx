// ItemDetail.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item, quantity);
  };

  const handleIncrease = () => setQuantity(quantity + 1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const alreadyInCart = isInCart(item.id);

  return (
    <div
      style={{
        maxWidth: "800px",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "auto",
        backgroundColor: "#F0A500",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "8px 15px",
          border: "1px #1B1A17",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#1B1A17",
          color: "#F0A500",
        }}
      >
        ← Volver
      </button>

      <h2>{item.name}</h2>
      <img
        src={item.img}
        alt={item.name}
        style={{
          width: "50%",
          height: "auto",
          objectFit: "cover",
        }}
      />
      <p>
        <strong>Marca:</strong> {item.brand}
      </p>
      <p>
        <strong>Tipo:</strong> {item.type}
      </p>
      <p
        style={{
          fontSize: "30px",
          color: "#F0A500",
          fontWeight: "bold",
          backgroundColor: "#1B1A17",
          padding: "10px",
          borderRadius: "5px",
          width: "fit-content",
        }}
      >
        ${item.price?.toLocaleString()}
      </p>

      <div style={{ marginTop: "10px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={handleDecrease}
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              cursor: "pointer",
              borderRadius: "25px",
              backgroundColor: "#1B1A17",
              color: "#F0A500",
            }}
          >
            -
          </button>
          <span
            style={{ fontSize: "20px", minWidth: "30px", textAlign: "center" }}
          >
            {quantity}
          </span>
          <button
            onClick={handleIncrease}
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              cursor: "pointer",
              borderRadius: "25px",
              backgroundColor: "#1B1A17",
              color: "#F0A500",
            }}
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: alreadyInCart ? "#6c757d" : "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          {alreadyInCart ? "Agregar más unidades" : "Agregar al carrito"}
        </button>

        <button
          onClick={() => navigate("/carrito")}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#1B1A17",
            color: "#F0A500",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Ir al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
