import ItemCount from "../ItemCount"; 
import {Card} from "react-bootstrap";
import { useState} from "react";




const ItemDetail = ({product}) => {
  const [appear,setAppear]= useState(true);}
  

  const handleClick = (cantidad) => {
    setCounter (cantidad)
    setAppear (false);
  
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
      <ItemCount stock={5} initial={1} onAdd={handleClick}/>
        </>
        );}
 
        export default ItemDetail;



    


 

