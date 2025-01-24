import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Container, Typography, Button, Box } from "@mui/material";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">
          Your cart is empty. <Link to="/">Explore services</Link>
        </Typography>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <Box sx={{ mt: 3, textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/checkout"
            >
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Cart;