import React from "react";
import { Typography, Box, Link } from "@mui/material";

const Footer = () => (
  <Box sx={{ bgcolor: "primary.main", color: "white", p: 2, mt: 4 }}>
    <Typography variant="body1" align="center">
      &copy; 2025 POS Interface | All rights reserved | Developed By{" "}
      <Link
        href="https://raunak-website.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer" 
        sx={{ color: "white", textDecoration: "underline" }} 
      >
        Raunak Kumar Gupta
      </Link>
    </Typography>
  </Box>
);

export default Footer;