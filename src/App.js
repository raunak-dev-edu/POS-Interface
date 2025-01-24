import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ReceiptPage from "./pages/ReceiptPage";
import GlobalSnackbar from "./components/Snackbar"; 
import { CssBaseline, Container } from "@mui/material";

function App() {
  return (
    <CartProvider>
      <Router>
        <CssBaseline />
        <Header />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/receipt" element={<ReceiptPage />} />
          </Routes>
        </Container>
        <Footer />
        <GlobalSnackbar /> 
      </Router>
    </CartProvider>
  );
}

export default App;