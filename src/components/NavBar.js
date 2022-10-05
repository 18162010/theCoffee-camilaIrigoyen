
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

const  NavBar= () => {
    return (    
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to= '/'>
        theCoffee
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>

      <Navbar.Link as={Link} to= '/category/capsulas'>Capsulas</Navbar.Link>
      <Navbar.Link as={Link} to= '/category/en-grano'>En-grano</Navbar.Link>
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar>
        );
}
 
export default NavBar;
    