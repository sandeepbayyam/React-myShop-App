import React from 'react';
import { useEffect, useState } from 'react';
import Nav from './Nav';
import {getMenClothings} from '../store/actions/menActions'
import  { Row,Col,Card,CardImg,ButtonGroup,Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {AiOutlineHeart}from 'react-icons/ai';
import{GrCart} from 'react-icons/gr';
import { addToWishlist } from '../store/actions/wishlistActions';

const Mens = (props) => { 
  const [products,setProducts] = useState([]);
  
useEffect(()=>{
  props.dispatch(getMenClothings());
},[]);

useEffect(()=>{
  setProducts(...props.men.menClothes)
},[props.men])

  return (
    <div>
      <Nav/>
      <h1 className='text-center'>Men's Clothing</h1>
      <Row className='mx-auto'>
           {
             products && products.map((p,i) => {
               return (
                 <>
                 <Col  xl={4} lg={4} md={6} sm={12} className="mx-auto" >
                   <Card className="mb-3 shadow-lg">
                   <Card.Header className="mb-2 text-center">{p.category}</Card.Header>
                   <CardImg src={p.image} className="img.fluid p-3 mx-auto" style={{width:"150px",height:"150px"}}>
                   </CardImg>
                   <Card.Body>
                   <Card.Text className="ms-2">{p.title}</Card.Text>
                   <Card.Title className="ms-2">Price :${p.price}</Card.Title>
                   </Card.Body>
                   <ButtonGroup className='mx-auto'>
                     <Link to="/wishlist">
                      <Button variant="dark mb-5 p-2" style={{width:"100px"}}
                         onClick={()=>{
                            alert("Added to wishlist")
                          props.dispatch(addToWishlist(p))
                        }} 
                      >Wishlist&nbsp;<AiOutlineHeart size={20}/>
                      </Button>
                      </Link>
                      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                      <Link to='/productdetails' state={p}> 
                              <Button variant="warning mb-5 p-2" 
                              style={{width:"100px"}}>
                                Buy&nbsp;<GrCart size={20}/>
                                </Button> 
                      </Link>
                   </ButtonGroup>
                 </Card>
                 </Col>
                 </>
               )
             })
           }
           </Row>
           <Footer/>
    </div>
   
  )
}

export default connect(store=>store) (Mens);
