import React from 'react'
import { connect } from "react-redux";
import { useEffect, useState } from 'react';
import {getProducts} from '../store/actions/productsActions'
import { Row,Col,Card,CardImg,ButtonGroup,Button,Form,FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {AiOutlineHeart}from 'react-icons/ai';
import{GrCart} from 'react-icons/gr';
import { addToWishlist } from '../store/actions/wishlistActions';


const Products = (props) => {
    const [products,setProducts] = useState([]);

useEffect(()=>{
  props.dispatch(getProducts());
},[]);

useEffect(()=>{
  setProducts(...props.products.products)
},[props.products])

  return (
    <div>
        <h1 className="text-center">ALL PRODUCTS</h1>
        <div>
                <Form className="d-flex w-50 mx-auto">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2 "
                  aria-label="Search"
                />
                <Button variant="dark">Search</Button>
              </Form>
              <hr/>
          <Row>
           {
             products && products.map((p,i) => {
               return (
                 <>
                 <Col xl={4} lg={4} md={6} sm={12} key={i} className="mx-auto">
                   <Card className="mb-3 shadow-lg">
                   <Card.Header className="mb-2 text-center">{p.category}</Card.Header>
                   <CardImg src={p.image} className="img.fluid p-3 mx-auto" style={{width:"150px",height:"150px"}}>
                   </CardImg>
                   <Card.Body>
                   <Card.Text className="ms-2">{p.title}</Card.Text>
                   <Card.Title className="ms-2">Price :${p.price}</Card.Title>
                   </Card.Body>
                   <ButtonGroup className='mx-auto'>
                    <Link to='/wishlist'>
                        <Button variant="dark mb-5 p-2"
                         style={{width:"100px"}}
                         onClick={()=>{
                           alert("Added to wishlist")
                          props.dispatch(addToWishlist(p))
                        }} 
                         >
                           Wishlist&nbsp;<AiOutlineHeart size={20}/>
                           </Button>
                    </Link>
                       &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                   <Link to='/productdetails'state={p}> 
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
        </div>
    </div>
  )
}

export default connect(store=>store) (Products);
