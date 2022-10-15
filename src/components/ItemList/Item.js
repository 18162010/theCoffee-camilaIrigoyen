//mostrar productos en tu item list container items deben provenir de una promise que los resuelva en un time out de dos segundos//
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


const Item = ({product}) => {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.pictureUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          $ {product.price}
          </Card.Text>
          <Card.Text>
          {product.description}
          {product.unidadesPorEnvase}
        </Card.Text>
        <Link to={`/item/${product.id}`}>
        <Button variant="primary">
          Ver detalle
        </Button>
        </Link>
      </Card.Body>
    </Card>
  );
     
}

export default Item;
