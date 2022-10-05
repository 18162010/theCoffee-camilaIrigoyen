
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

const  NavBar= () => {
    return (    <Navbar bg="light" expand="lg">
    <Container>
      <Link to= '/'>
        theCoffee
        </Link>
        <Nav className="me-auto">
          <Link to='/'>
            Home
          </Link>

      <Link to= '/category/capsulas'>Capsulas</Link>
      <Link to= '/category/en-grano'>En-grano</Link>
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar>


        );
}
 
export default NavBar;
    