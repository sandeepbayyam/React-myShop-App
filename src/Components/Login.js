import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert,Container} from "react-bootstrap";
import { Button } from "react-bootstrap";
import {FcGoogle} from 'react-icons/fc';
import { useUserAuth } from "../context/UserAuthContext";
import '../index.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="logincontainer">
      <Container fluid className="rounded-3 shadow p-5 mx-auto mt-5" style={{width:'fit-content'}}>
        <h2 className="mt-5 text-center"> Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mt-3 mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
          </Form>
        <hr />
        <div className="d-grid gap-2">
          <Button variant="dark"
            onClick={handleGoogleSignIn}
            className="mx-auto"
          > <FcGoogle size={26}/>&nbsp;
          Sign in with Google
          </Button>
        </div>
         
        <div className="text-center m-3">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      </Container>
     
    </div>
  );
};

export default Login;
