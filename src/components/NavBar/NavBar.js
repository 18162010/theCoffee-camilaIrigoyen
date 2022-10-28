import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';
import "./NavBar.css";

const  NavBar= () => {
    return (                                                                        
    <Navbar   bg="" variant="">
    <Container  className= "containernav">
      <Link to= '/' >
        theCoffee
        </Link>
        <Nav className="me-auto">
          <Nav.Link class="my-3 mx-2" href='/'>
            Home
          </Nav.Link>
          <Nav.Link  class="my-3 mx-2" href= '/category/Nespresso'>Nespresso</Nav.Link>
          <Nav.Link  class="my-3 mx-2" href='/category/DolceGusto'>DolceGusto</Nav.Link>
        </Nav>
      <CartWidget className="icono"/>
    </Container>
  </Navbar>


        );
}
 
export default NavBar;
    