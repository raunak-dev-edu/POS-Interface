import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

const ReceiptPage = () => {
  const location = useLocation();
  const { cart, customer } = location.state || { cart: [], customer: {} }; 

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Receipt
      </Typography>
      <Typography variant="h6" gutterBottom>
        Thank you, {customer.name}!
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Your purchase was successful.
      </Typography>

      {/* Customer Details */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">Customer Details</Typography>
        <Typography>Name: {customer.name}</Typography>
        <Typography>Email: {customer.email}</Typography>
        <Typography>Phone: {customer.phone}</Typography>
      </Box>

      {/* Order Summary */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">Order Summary</Typography>
        {cart.map((item) => (
          <Box key={item.id} sx={{ mb: 2 }}>
            <Typography>
              {item.name} x{item.quantity}
            </Typography>
            <Typography>₹{item.price * item.quantity}</Typography>
          </Box>
        ))}
        <Typography variant="h6">Total: ₹{total}</Typography>
      </Box>

      <Button variant="contained" color="primary" onClick={() => window.print()}>
        Download Receipt
      </Button>
    </Container>
  );
};

export default ReceiptPage;