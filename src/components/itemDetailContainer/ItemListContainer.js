import { useEffect, useState } from 'react';
import{getProductsByCategory, getAllProducts} from "../utils/products";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";




const ItemListContainer = ({greeting}) => {
    const {categoryId} =useParams();
    const [products,setProducts]=useState([]);
    
    useEffect(() =>{if (categoryId){
        getProductsByCategory(categoryId)
        .then ((data)=>setProducts (data))
        .catch ((error) => console.warn (error))

    }
else { getAllProducts()
    .then ((data)=>setProducts (data))
        .catch ((error) => console.warn (error))
}}, [categoryId])
 
return (
        <div> 
            <h2>Bienvenidos a la tienda</h2>
            <h3 className="text-bg-primary p-3">{greeting}</h3>
            <ItemList products={products}/>
        </div>
     );
    }
 
export default ItemListContainer;