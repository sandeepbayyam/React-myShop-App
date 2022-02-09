import React from "react";
import NavBar from './Nav';
import CarouselContainer from "./Carousel"
import Products from './Products';
import Footer from './Footer';
import '../index.css';
import { Container } from "react-bootstrap";


const Home = () => {

  return (
    <>
      <Container fluid className="w-100">
        <NavBar/> 
        <CarouselContainer/>
        <Products/>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
