import React from 'react'
import { Carousel } from "react-bootstrap";
import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';
import image3 from '../Assets/image3.jpg';
import image4 from '../Assets/image4.jpg';
import image5 from '../Assets/image5.jpg';
import image6 from '../Assets/image6.jpg';
import '../index.css';

const CarouselContainer = () => {
  return (
    <div className='slidercontainer'>
      <Carousel fade={true} controls={false}>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100 img-fluid"
                src={image1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100 img-fluid"
                src={image2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100 img-fluid"
                src={image3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100 img-fluid"
                src={image4}
                alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100 img-fluid"
                src={image5}
                alt="Fifth slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100 img-fluid"
                src={image6}
                alt="Sixth slide"
                />
            </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselContainer;
