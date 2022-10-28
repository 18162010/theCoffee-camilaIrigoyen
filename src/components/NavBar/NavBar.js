import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';
import "./NavBar.css";

const  NavBar= () => {
    return (                                                                        
        <Navbar   bg="light" variant="dark">
    <Container  className= "containernav">
      <Link to= '/' >
        theCoffee
        </Link>
        <Nav className="me-auto">
          <Link  to='/'>
            Home
          </Link>

      <Link to= '/category/Nespresso'>Nespresso</Link>
      <Link to= '/category/DolceGusto'>DolceGusto</Link>
      </Nav>
      <CartWidget className="icono"/>
    </Container>
  </Navbar>


        );
}
 
export default NavBar;
    