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
          <Link to= '/category/Nespresso' className="my-3 mx-2">Nespresso</Link>
      <Link to= '/category/DolceGusto'  className="my-3 mx-2">DolceGusto</Link>
        </Nav>
      <CartWidget className="icono"/>
    </Container>
  </Navbar>


        );
}
 
export default NavBar;
    