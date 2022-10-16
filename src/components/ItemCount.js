import Container from 'react-bootstrap/Container';
import Button  from "react-bootstrap/Button";
import {onClick} from "react-bootstrap";
import { useState } from 'react';


const ItemCount =({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(initial)

    const sumar = () => {
        if (counter < stock){setCounter (counter +1)
        }};
        const restar = () => {
            if (counter > initial) {
            setCounter(counter -1)
            }}
            
    return (
    <>
        <button onClick = {(sumar)=> (counter +1)} >-</button>
        <h4> {counter}</h4>
        <button onClick = {(restar)=(counter -1)} >+</button>
        </>
        
        
     )
}
export default ItemCount;




 