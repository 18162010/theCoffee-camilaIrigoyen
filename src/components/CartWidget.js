import {GrCart} from "react-icons/gr"
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <Link to= "/Cart">
<GrCart/>
        </Link>
        
        );
}
 
export default CartWidget;