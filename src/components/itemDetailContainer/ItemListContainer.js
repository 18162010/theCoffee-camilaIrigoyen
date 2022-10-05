import {useEffect} from "react";
import { useState } from "react";
import {getProducts} from "../utils/products";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = ({greeting}) => {
    const [products,setProducts]=useState([]);
    const {categoryName} =useParams();

    useEffect (() => {
        getProducts()
        .then ((data) => setProducts (data))
        .catch ((error) => console.warn(error))
    }, [])
    return (
        <div> 
            <h1>Productos</h1>
            <h3 className="text-bg-primary p-3">{greeting}</h3>
            <ItemList products={products}/>
        </div>
     );
    }
 
export default ItemListContainer;