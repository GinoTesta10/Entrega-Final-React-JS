// context/CartContext.jsx
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Si ya existe, actualizar cantidad
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      // Si no existe, agregarlo
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Remover producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Limpiar todo el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Verificar si un producto está en el carrito
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  // Obtener cantidad de un producto específico
  const getQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  // Calcular total de items
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calcular precio total
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        isInCart,
        getQuantity,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
