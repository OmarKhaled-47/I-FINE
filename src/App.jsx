import "./App.css";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import { MapPin } from "lucide-react";
function App() {
  return (
    <Router>
      <div>
        <Navbar expand="lg" className="position-absolute w-100">
          <Container>
            <Navbar.Brand>
              <Link to="/" className="navbar-brand d-flex align-items-center">
                <MapPin size={40} color="#dc3545" strokeWidth={3} />
                <span className="mx-2 text-light lh-1 fw-semibold">
                  UTM
                  <br></br>I-FIND
                </span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="bg-light"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-end w-100">
                <Link to="/" className="nav-link text-uppercase">
                  Home
                </Link>
                <Link to="/courses" className="nav-link text-uppercase">
                  Our courses
                </Link>
                <Link to="/about" className="nav-link text-uppercase">
                  About us
                </Link>
                <Link to="/blog" className="nav-link text-uppercase">
                  Activities
                </Link>
                <Link to="/contact" className="nav-link text-uppercase">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>
          <div className="container my-5"></div>
          <div className="bg-body-tertiary">
            <div className="container">
              <p className="p-3 m-0 text-center">
                copyright @ made by Abdelrahman Rashad
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
