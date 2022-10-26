import { useContext } from "react";
import CartContext from "../context/cartContext";
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";




const Cart = () => {
    const {cart} = useContext (CartContext);
    console.log({cart}); //agregar como parametro el total//
    return (
    <Container>
    <h3> Carrito de compras</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Accion</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          
        </tr>
      </tbody>
    </Table>
    </Container>
    );   
}
 
export default Cart;
