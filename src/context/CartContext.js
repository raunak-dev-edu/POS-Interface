import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", 
  });

  const showSnackbar = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  const addToCart = (service) => {
    const existing = cart.find((item) => item.id === service.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...service, quantity: 1 }]);
    }
    showSnackbar(`${service.name} added to cart!`, "success");
  };

  const removeFromCart = (id) => {
    const removedItem = cart.find((item) => item.id === id);
    setCart(cart.filter((item) => item.id !== id));
    showSnackbar(`${removedItem.name} removed from cart!`, "error");
  };

  const clearCart = () => {
    setCart([]);
    showSnackbar("Cart cleared!", "info");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        customer,
        setCustomer,
        searchTerm,
        setSearchTerm,
        snackbar,
        setSnackbar,
        showSnackbar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};