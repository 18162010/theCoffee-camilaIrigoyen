import ItemCount from "../ItemCount";
import { useContext, useState} from "react";
import cartContext from "../context/cartContext";
import "./itemDetail.css"
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../ItemList/Item"; 

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(cartContext);
  const [counter, setCounter] = useState(0);
  const [Appear, setAppear] = useState(true);
  


  const handleAdd = (value) => {
    setCounter (value)
    setAppear (false);
    addItem(product, value);}
    
  
 return (
 <div className="ItemDetail">
        <Item product={product} />
        {Appear && (
            <ItemCount initial={1} Stock={10} onAdd={handleAdd}/>
        )}
        {!Appear && (
        <Link to='/Cart'>
            <Button variant="success">
                Ir al Carrito
            </Button>
        </Link>
    )}
    </div>
    );
}
       
 
        export default ItemDetail;



    


 

