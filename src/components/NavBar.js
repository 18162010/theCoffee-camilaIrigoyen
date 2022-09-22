
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

const  NavBar= () => {
    return (    
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">theCoffee</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">capsulas</Nav.Link>
          <Nav.Link href="#link">en-grano</Nav.Link>  
        </Nav>
        <CartWidget/>
      </Navbar.Collapse>
    </Container>
  </Navbar>
        );
}
 
export default NavBar;
    