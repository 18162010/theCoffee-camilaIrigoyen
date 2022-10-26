import { createContext, useState} from "react";


const CartContext =createContext(); 
export default CartContext;

export const CartProvider= ({children}) =>{
    const [cart,setCart] = useState ([]); 

const addItem = (product,quantity) => {
  
    if (!isInCart(product.id)){
        const item = {...product,quantity};
        setCart ([...cart,item]); }
    else{
        const itemIndex = cart.findIndex((item) => item.id === parseInt (product.id));
        const itemDraft = {...cart[itemIndex]};
        itemDraft.quantity = itemDraft.quantity + quantity
        const cartDraft= [...cart];
        cartDraft[itemIndex] = itemDraft;
        setCart(cartDraft);}}

       

    const removeItem= (itemId) => {
        const cartDraft= cart.filter ((item) => item.id !== itemId);
        setCart(cartDraft)}
    const clearCart = ()=> {
        setCart ([]);}
        const isInCart = (id) => cart.some ((item) => item.id === parseInt (id));

        return (
            <CartContext.Provider value={{cart,addItem,isInCart,removeItem,clearCart}}>   
        {children}
        </CartContext.Provider>


        )         
    };
   
    //agregar la funcion de total//