import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Box, 
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { motion } from "framer-motion"; 

const Header = () => {
  const { searchTerm, setSearchTerm, cart } = useContext(CartContext);
  const navigate = useNavigate();

  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AppBar position="static">
        <Toolbar>
          
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            
            <img
              src="/favicon.ico" 
              alt="Logo"
              style={{ width: "30px", height: "30px", marginRight: "8px" }} 
            />
            
            <Typography variant="h6" component="div">
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                POS Interface
              </Link>
            </Typography>
          </Box>

          {!isMobile && (
            <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center" }}>
              <TextField
                size="small"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ mr: 2, backgroundColor: "white", borderRadius: 1 }}
              />
              <Button type="submit" variant="outlined" color="white">
                Search
              </Button>
            </form>
          )}

          <IconButton color="inherit" component={Link} to="/cart">
            <ShoppingCartIcon />
            <Typography sx={{ ml: 1 }}>{cart.length}</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Header;