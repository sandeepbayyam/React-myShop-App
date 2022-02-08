import React from 'react'
import Nav from './Nav';
import {connect} from 'react-redux';
import  { Row,Col,Card,CardImg,ButtonGroup,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/actions/cartActions';
import { GrCart } from 'react-icons/gr';
import {AiOutlineDelete} from 'react-icons/ai';
import { removeWishlist } from '../store/actions/wishlistActions';
import {Alert} from 'react-bootstrap';

const Wishlist = (props) => {
  const product = props.wishlist.wishlist;
  console.log("Wishlist",product)
  return (
    <div>
        <Nav/>
      <h1 className='text-center'>My Wishlist</h1>
       {
         product.length===0 ?
          <div>
          <Alert variant="primary w-50 mx-auto"> <h3 className='text-center '> Wishlist is Empty </h3> </Alert> 
       </div> :
      <Row className='mx-auto'>
           {
             product && product.map((p,i) => {
               return (
                 <>
                 <Col  xl={4} lg={4} md={6} sm={12} className="mx-auto" >
                   <Card className="mb-3 shadow-lg" style={{width:'350px',height:'400px'}}>
                   <Card.Header className="mb-2 text-center">{p.category}</Card.Header>
                   <CardImg src={p.image} className="img.fluid p-3 mx-auto" style={{width:"150px",height:"150px"}}>
                   </CardImg>
                   <Card.Body>
                   <Card.Text className="ms-2">{p.title}</Card.Text>
                   <Card.Title className="ms-2">Price :${p.price}</Card.Title>
                   </Card.Body>
                   <ButtonGroup className='m-2'> 
                    <Link to='/cart'>
                        <Button variant="primary" style={{color:"white",fontWeight:"bold"}}
                          onClick={()=>{
                             alert("Added to Cart")
                            props.dispatch(addToCart(p))
                          }}     >
                          <GrCart size={20}/>&nbsp;ADD TO CART
                          </Button>
                       </Link>
                       &nbsp; &nbsp; &nbsp;
                       <Button variant="danger"
                         style={{color:"white",fontWeight:"bold"}}
                         onClick={()=>{
                           props.dispatch(removeWishlist(i));
                         }}
                         >
                           Remove <AiOutlineDelete size={25}/>
                       </Button>
                    </ButtonGroup>
                 </Card>
                 </Col>
                 </>
               )
             })
           }
           </Row>
}
    </div>
  )
}

export default connect(store=>store) (Wishlist);
