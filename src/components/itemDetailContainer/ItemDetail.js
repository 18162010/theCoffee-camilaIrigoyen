import ItemCount from "../itemCount/ItemCount";
import { useContext, useState} from "react";
import CartContext from "../context/cartContext";
import "./itemDetail.css"
import {Button, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../ItemList/Item"; 

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [counter,setCounter] = useState(0);
  const [Appear, setAppear] = useState(true);
  


  const handleAdd = (value) => {
    setCounter (value)
    setAppear (false);
    addItem(product, value);}

 
  
 return (
 <div className="ItemDetail">
    <Row>
      <Col>
        <Item product={product} />
      </Col>
      <Col>
        {Appear ? (
            <ItemCount initial={1} Stock={10} onAdd={handleAdd}/>
        ):(<Link to='/Cart'>
            <Button variant="success">
                Terminar compra
                </Button>
                </Link>)}
      </Col>
    </Row>
  </div>
 );}
        
        export default ItemDetail;

      

    


 

