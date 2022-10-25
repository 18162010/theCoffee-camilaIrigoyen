import { useContext } from "react";

const Cart = () => {
    const {cart} = {useContext};
    console.log({cart});
    return (<h3> Carrito de compras</h3>);
    
}
 
export default Cart;