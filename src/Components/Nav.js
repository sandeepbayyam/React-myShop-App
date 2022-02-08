import React from 'react'
import '../index.css';
import { useUserAuth } from "../context/UserAuthContext";
import { Navbar,Nav,Container,NavDropdown,Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {connect} from 'react-redux'

const NavBar = (props) => {
   const { user } = useUserAuth();
  return (
    <div>
     <>
  <Navbar bg="dark" variant="dark" expand='lg'>
    <Container>
      <Navbar.Brand>
            <span className='navbar-logo1'>my</span>
            <span className='navbar-logo2'>Shop</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>
      <Nav.Link as={Link} to="/Home">Home</Nav.Link>
      <NavDropdown title="Categories" id="navbarScrollingDropdown">
          <NavDropdown.Item  as={Link} to="/men" >Men's Clothing</NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/women">Women's Clothing</NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/electronics">Electronics </NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/jewellery">Jewellery </NavDropdown.Item>
        </NavDropdown>
      <Nav.Link  as={Link} to="/wishlist" >My Wishlist</Nav.Link>
      <Nav.Link  as={Link} to="/cart">
       <AiOutlineShoppingCart size={20}/> Cart&nbsp;
        <Badge pill bg="secondary">
          {props.cart.cart.length>0 ? props.cart.cart.length:''}
        </Badge>
      </Nav.Link>
    </Nav>
      <Button variant="warning">{user && user.displayName}</Button>
      &nbsp;&nbsp;
      <Button variant="light" as={Link} to ='/'>Logout</Button>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    </div>
  )
}

export default connect(store=>store)(NavBar);
