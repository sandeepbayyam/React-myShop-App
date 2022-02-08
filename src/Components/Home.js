import React from "react";
import NavBar from './Nav';
import CarouselContainer from "./Carousel"
import Products from './Products';
import Footer from './Footer';


const Home = () => {

  return (
    <>
      <div>
        <NavBar/> 
        <CarouselContainer/>
        <Products/>
        <Footer />
      </div>
    </>
  );
};

export default Home;
