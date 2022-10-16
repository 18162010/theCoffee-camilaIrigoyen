import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../utils/products";
import ItemDetail from "./ItemDetail";
import {products} from "../utils/products"



const ItemDetailContainer = () => {
    
    const [product, setProduct]=useState([])
    const{id}=useParams();

    useEffect(() =>{
        const filterpromise =new Promise ((resolve,reject) => {
            setTimeout (() =>{
                resolve(products)},2000)})
                filterpromise.then((resolve) =>{
                    setProduct(resolve.find(prod => prod.id === parseInt(id)))},[id])
    },)
}

    

export default ItemDetailContainer;