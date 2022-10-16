import Item from "../ItemList/Item";
import { useState } from "react";
import ItemCount from "../ItemCount"; 
import { Button, Card, Container } from "react-bootstrap";
import {Link} from "react-bootstrap";

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

