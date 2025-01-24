import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion"; 

const ServiceCard = ({ service }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image={service.image}
          alt={service.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {service.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.description}
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
          ₹ {service.price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={() => addToCart(service)}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;