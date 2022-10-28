import Button from "react-bootstrap/Button";
import { useEffect, useState } from 'react';



const ItemCount = ({ stock, initial,onAdd}) => {
    const [counter, setCounter] =  useState(parseInt(initial));

    const handleClick=() => onAdd(counter);

    useEffect(() =>{
        setCounter(parseInt(initial));},[initial])

    const sumar = () => {
     
            setCounter(counter + 1)
    };
    const restar = () => {
       if(counter>initial)
            setCounter(counter - 1)
        }
    

    return (
        <div className="itemCount">
            <Button variant="success" onClick={sumar} >+</Button>
            <h4 variant="success">{counter}</h4>
            <Button variant="danger" onClick={restar} >-</Button>
            <Button variant="outline-primary" disabled={counter<=0} onClick={handleClick}>Agregar al carrito</Button>{' '}
       
        </div>


    )
}
export default ItemCount;




