import React from 'react';
import Nav from './Nav';
import { useLocation } from 'react-router-dom';
import {Row ,Col,Card, CardImg, Button } from 'react-bootstrap';
import{FcRating} from 'react-icons/fc';
import{GrCart} from 'react-icons/gr';
import { connect } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { Link } from 'react-router-dom';

const ProductDetails = (props) => {
  const x = useLocation();
  const product = x.state;
  console.log("ProductDetails:",product);
  return (
    <div>
      <Nav/>
      <h1 className='text-center'> ProductDetails </h1>
      <Card className='p-4'>
      <Row className='mx-auto'>
        <Col lg={4}>
        <CardImg src={product.image} className="img.fluid p-3 mx-auto">
        </CardImg>
        </Col>
        <Col lg={8}>
        <Card.Header className="mb-2 text-center bg-dark text-white">{product.category}</Card.Header>
            <Card.Body>
                   <Card.Text className="ms-2">{product.title}</Card.Text>
                   <Card.Text className="ms-2">{product.description}</Card.Text>
                   <Card.Title className="ms-2">Price:${product.price}</Card.Title>
                   <Card.Subtitle className="ms-2 text-muted">Ratings&Reviews:</Card.Subtitle>
                   <Card.Title className="ms-2">{product.rating.rate}&nbsp;<FcRating size={23}/></Card.Title>
                   <Card.Subtitle className="ms-2 text-muted">{product.rating.count}&nbsp;Reviews</Card.Subtitle>
            </Card.Body>
            <Link to='/cart'>
              <Button variant="primary float-end" style={{color:"white",fontWeight:"bold"}}
                onClick={()=>{
                   alert("Added to Cart")
                   props.dispatch(addToCart(product))
                }}     >
                <GrCart size={20}/>&nbsp;ADD TO CART
                </Button>
              </Link>
        </Col>
      </Row>
      </Card>
    </div>
  )
}

export default connect(store=>store) (ProductDetails);
