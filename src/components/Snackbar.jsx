import React, { useContext } from "react";
import { Snackbar, Alert } from "@mui/material";
import { CartContext } from "../context/CartContext";

const GlobalSnackbar = () => {
  const { snackbar, setSnackbar } = useContext(CartContext);

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={snackbar.severity}
        sx={{ width: "100%" }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default GlobalSnackbar;