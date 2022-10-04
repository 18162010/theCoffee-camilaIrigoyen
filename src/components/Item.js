//mostrar productos en tu item list container items deben provenir de una promise que los resuelva en un time out de dos segundos//
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Item = (product) => {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{product.marca}</Card.Title>
        <Card.Text>
          {product.variedad}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
     
}

export default Item;
