import React, { useContext, useRef } from "react"; 
import ServiceCard from "../components/ServiceCard";
import services from "../assets/services.json";
import { CartContext } from "../context/CartContext";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import { motion } from "framer-motion"; 
import Lottie from "lottie-react"; 
import animationData from "../assets/animation.json"; 

const Home = () => {
  const { searchTerm } = useContext(CartContext);
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: "center",
          justifyContent: "space-between",
          height: { xs: "auto", md: "60vh" }, 
          gap: 4, 
          mb: 10,
          py: { xs: 4, md: 0 }, 
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" }, 
            order: { xs: 2, md: 1 }, 
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.5 }} 
          >
            <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              Discover the Best Services for You
            </Typography>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 1 }} 
          >
            <Typography variant="h5" sx={{ mb: 3, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
              Explore our wide range of services tailored to your needs.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 1.5 }} 
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={scrollToServices} 
            >
              Get Started
            </Button>
          </motion.div>
        </Box>


        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: { xs: 1, md: 2 }, 
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.5 }} 
          >
            <Lottie
              animationData={animationData} 
              loop={true} 
              style={{
                width: "100%", 
                maxWidth: "400px", 
              }}
            />
          </motion.div>
        </Box>
      </Box>

      <div ref={servicesRef}> 
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={3}>
          {filteredServices.map((service, index) => (
            <Grid item key={service.id} xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }} 
                viewport={{ once: true }} 
              >
                <ServiceCard service={service} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Home;