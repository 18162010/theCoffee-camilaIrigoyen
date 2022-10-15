import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../utils/products";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {
    
    const [product, setProduct]=useState()
    const{id}=useParams();

    useEffect(() =>{
        getProduct(id)
        .then ((data) =>{
            setProduct(data)})
            .catch(error => console.warn(error))}, [id])

   
    
    return (
    <div>
        <h2> Detalle del producto</h2>
        {product &&  <ItemDetail product={product}/>}
   </div>);
    }
   
    
 
export default ItemDetailContainer;