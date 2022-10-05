import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
const Checkout = () => {
    const {Checkout} =useParams();
  return (
    <Container>
      <h1>Resumen de su compra</h1>
    </Container>
  );
}
 
export default Checkout;