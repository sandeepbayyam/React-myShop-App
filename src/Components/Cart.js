import React from 'react'
import {useState,useEffect} from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import  { Row,Col,Card,CardImg,ButtonGroup,Button, } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { removeCart } from '../store/actions/cartActions';
import {AiOutlineDelete} from 'react-icons/ai';

const Cart = (props) => {
  
  const products = props.cart.cart;
  console.log("Cartproducts",products)

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    products.forEach((item) => {
      price += item.price;
    });
    setTotalPrice(price);
  }, [products, totalPrice,setTotalPrice]);
   
  return (
    <div>
      <Nav/>
       <h1 className='text-center'>My Cart</h1>
      <div>
      <div>
      {
          products.length === 0 ?
            <div>
             <Alert variant="danger w-50 mx-auto"> <h3 className='text-center '> Cart is Empty </h3> </Alert> 
          </div>:
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
                   <Button variant="danger w-50 mb-5"
                         style={{color:"white",fontWeight:"bold", marginLeft:"25%"}}
                         onClick={()=>{
                           props.dispatch(removeCart(i));
                         }}
                         >
                           Remove <AiOutlineDelete size={25}/>
                       </Button>
                 </Card>
                 
                 </Col>
                 </>
               )
             })
           }
           </Row>
}  
   </div> 
    <div>
      { products.length >= 1 ?
       <Card className='text-center mx-auto border border-dark shadow w-75'>
        <CardHeader><h4> Cart Summary </h4></CardHeader>
         <h5>Total Items = {products.length} items</h5>
         <h5>Total Price = ${totalPrice}</h5>
        <Button variant="warning" onClick={()=> {
            alert('Order placed Successfully')
        }}>Place Order</Button>
      </Card>
      :''
    }
    </div>
    </div>
      </div>
  )
}

export default connect(store=>store) (Cart);
