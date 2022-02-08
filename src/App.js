import { Row, Col } from "react-bootstrap";
import './index.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Wishlist from "./Components/Wishlist";
import Cart from './Components/Cart';
import Mens from "./Components/Mens";
import Womens from "./Components/Womens";
import Electronics from "./Components/Electronics";
import Jewellery from "./Components/Jewellery";
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="container-fluid">
      <Row> 
        <Col className="g-0">
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/Home" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/men" element={<Mens/>} />
              <Route path="/women" element={<Womens />} />
              <Route path="/electronics" element={<Electronics/>} />
              <Route path="/jewellery" element={<Jewellery />} />
              <Route path="/productdetails" element={<ProductDetails />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </div>
  );
}

export default App;