
import ItemCount from "../ItemCount"; 
import {Card} from "react-bootstrap";
import {Link} from "react-bootstrap";
import Item from "../ItemList/Item";

const ItemDetail = ({product}) => {
    const onAdd = (cantidad) => {console.log(cantidad)}
    console.log(product)
 return (
        <>  
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
        </Card.Body>
      </Card>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
        );
}



    


 
export default ItemDetail;

