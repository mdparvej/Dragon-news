import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { myContex } from "../../AuthContex/AuthContex";
import { Link } from "react-router-dom";
import { AuthContex } from "../../../Contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const {currentUser,logOut} = useContext(myContex);
  const {user} = useContext(AuthContex);
  const handleLogOut = () => {
    logOut()
    .then(() => {

    })
    .catch(error => console.error(error))
  }
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand><Link to="/">Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>More deets {user?.displayName}</Nav.Link>
            <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
            
            < >
              {currentUser?.displayName ? 
              <><Button variant="light" onClick={handleLogOut}>Log Out</Button></> 
              : <> 
                <Button variant="light"><Link  to='/login'>Login</Link></Button> 
                <Button variant="light"><Link  to='/resister'>Resister</Link></Button> 
              </>
              }

              {currentUser?.photoURL ? <Image src={currentUser.photoURL} style={{height: '40px'}} roundedCircle></Image> : <FaUser></FaUser>}
            </>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
