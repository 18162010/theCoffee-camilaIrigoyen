import Button from "react-bootstrap/Button";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const ItemCount = ({ stock, initial,onAdd}) => {
    const [counter, setCounter] =  useState(parseInt(initial));

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
            <Button variant="outline-primary">Agregar al carrito</Button>{' '}
            <Button variant="danger" onClick={restar} >-</Button>
        </div>


    )
}
export default ItemCount;




