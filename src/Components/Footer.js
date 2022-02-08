import React from 'react'
import { Form,FormControl,Button } from 'react-bootstrap';
import {TiSocialFacebookCircular,
        TiSocialLinkedinCircular,
        TiSocialGooglePlus,
        TiSocialTwitterCircular,
        TiSocialYoutube,
        TiSocialSkypeOutline  } from 'react-icons/ti';

const Footer = () => {
  return (
    <>
    <div className='d-flex flex-wrap bg-dark text-white'>
         <div className='p-1'>
         <h3 className='p-1'>Follow us on</h3>
          <TiSocialFacebookCircular size={50}/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TiSocialLinkedinCircular size={50}/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TiSocialSkypeOutline size={50}/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TiSocialGooglePlus size={50}/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TiSocialTwitterCircular size={50}/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TiSocialYoutube size={50}/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className='p-3' style={{marginLeft:"60px",marginTop:'60px'}}>
          ©Copyright 2022 @ <h6>myShop.com</h6>
          </div>

       <div className=' mt-3 p-1' style={{marginLeft:"auto",}}>
         <h5>Signup for our Newsletter</h5>
       <Form className='d-flex' style={{width:"400px",}}>
        <FormControl
          type="email"
          placeholder="Enter your E-mail"
          className="me-2"
          aria-label="E-mail"
        />
        <Button variant="primary">Subscribe</Button>
      </Form>
      </div>
    </div>
 </>
  )
}

export default Footer
