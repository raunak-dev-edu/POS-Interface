import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Checkout = () => {
  const { cart, customer, setCustomer, clearCart, showSnackbar } =
    useContext(CartContext);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  
  const validateInputs = () => {
    const newErrors = {};

    if (!customer.name || customer.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!customer.email || !emailRegex.test(customer.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^\d{10}$/;
    if (!customer.phone || !phoneRegex.test(customer.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = () => {
    
    if (!validateInputs()) {
      showSnackbar("Please fix the errors before proceeding.", "error");
      return;
    }

    
    setPaymentComplete(true);
    showSnackbar("Payment successful! Redirecting to receipt...", "success");

    navigate("/receipt", {
      state: { cart, customer }, 
    });

    clearCart();
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Box component="form" sx={{ maxWidth: 400, mx: "auto" }}>

        <TextField
          fullWidth
          label="Name"
          value={customer.name || ""}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          error={!!errors.name}
          helperText={errors.name}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Email"
          type="email"
          value={customer.email || ""}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Phone"
          type="tel"
          value={customer.phone || ""}
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
          error={!!errors.phone}
          helperText={errors.phone}
          sx={{ mb: 2 }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleCheckout}
        >
          Pay Now
        </Button>
      </Box>

      {paymentComplete && (
        <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
          Payment Successful! Redirecting to receipt...
        </Typography>
      )}
    </Container>
  );
};

export default Checkout;