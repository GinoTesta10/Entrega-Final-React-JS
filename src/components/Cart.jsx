import { useContext } from "react";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";

const showAlert = () => {
  Swal.fire({
    title: "Compra realizada!",
    text: "Le agradecemos por su compra.",
    icon: "success",
    confirmButtonText: "OK",
  });
};
const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } =
    useContext(CartContext);

  if (cart.length === 0)
    return (
      <h2
        style={{ display: "flex", justifyContent: "center", color: "#F0A500" }}
      >
        No hay productos en el carrito.
      </h2>
    );

  return (
    <div>
      <h1
        style={{
          paddingBottom: "50px",
          color: "#F0A500",
          fontFamily: "BBH Sans Bartle",
          width: "25%",
        }}
      >
        Carrito
      </h1>

      <h2
        style={{
          padding: "20px",
          backgroundColor: "#F0A500",
          width: "300px",
          textAlign: "center",
          border: "5px groove #FF6000",
        }}
      >
        Total: ${getTotalPrice()}
      </h2>

      <button
        style={{
          padding: "10px",
          fontSize: "15px",
          marginLeft: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={clearCart}
      >
        Vaciar Carrito
      </button>

      <button
        onClick={() => {
          showAlert();
          clearCart();
        }}
        style={{
          padding: "10px",
          fontSize: "15px",
          marginLeft: "10px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Finalizar compra
      </button>
    </div>
  );
};

<div
  style={{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10px",
  }}
>
  {cart.map((prod) => (
    <div
      key={prod.id}
      style={{
        margin: "10px 0",
        backgroundColor: "#F0A500",
        padding: "15px",
        borderRadius: "20px",
        width: "auto",
        height: "auto",
      }}
    >
      <h2>{prod.name}</h2>
      <img
        style={{ width: "auto", height: "200px" }}
        src={prod.img}
        alt={prod.name}
      />
      <p style={{ fontSize: 20 }}>Cantidad: {prod.quantity}</p>
      <p style={{ fontSize: 20 }}>Precio unidad: ${prod.price}</p>
      <p style={{ fontSize: 20 }}>Subtotal: ${prod.price * prod.quantity}</p>

      <button
        style={{
          marginBottom: "20px",
          padding: "10px",
          borderRadius: "5px",
          color: "#F0A500",
          backgroundColor: "#1B1A17",
          cursor: "pointer",
        }}
        onClick={() => removeFromCart(prod.id)}
      >
        Eliminar
      </button>
    </div>
  ))}
</div>;

export default Cart;
