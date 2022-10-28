
import { useContext } from "react";
import { Badge } from "react-bootstrap";
import {GrCart} from "react-icons/gr"
import { Link } from "react-router-dom";
import CartContext from "./context/cartContext";


const CartWidget = () => {
        const {totalQuantity}= useContext (CartContext);
    
    return (
        <>
        <Link to= "/Cart">
        <GrCart/>
        </Link>
        {totalQuantity > 0 &&
         (<Badge pill bg="danger">{totalQuantity}</Badge>)}
        </>
        );
}
 
export default CartWidget;