import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography>Quantity: {item.quantity}</Typography>
            <Typography>Price: ₹{item.price * item.quantity}</Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CartItem;