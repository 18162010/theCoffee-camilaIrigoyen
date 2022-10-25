import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import { onClick } from "react-bootstrap";
import { useEffect, useState } from 'react';

const ItemCount = ({ stock, initial}) => {
    const [counter, setCounter] = useState(initial)

    useEffect(() =>{
        setCounter(parseInt(initial));},[initial])

    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
    
        }
    };
    const restar = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }

    return (
        <div class="itemCount">
            <Button variant="success" onClick={() => sumar()} >+</Button>
            <h4 variant="success">{counter}</h4>
            <Button variant="outline-primary">Agregar al carrito</Button>{' '}
            <Button variant="danger" onClick={() => restar()} >-</Button>
        </div>


    )
}
export default ItemCount;




