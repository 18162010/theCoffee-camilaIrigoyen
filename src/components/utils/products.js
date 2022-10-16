import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../itemDetailContainer/ItemListContainer";


export const products=[
    {id:1, title: "Dolce gusto", category:"DolceGusto" ,description: "lungo",unidadesPorEnvase: "16",price:"100",pictureUrl:"https://thumbs.dreamstime.com/b/nescafe-dolce-gusto-c%C3%A1psulas-de-caf%C3%A9-aisladas-en-fondo-blanco-enero-milan-italy-set-top-view-lisa-y-lija-plana-obtenida-la-207426709.jpg"},
    {id:2, title: "Dolce gusto",category:"DolceGusto", description: "lungo", unidadesPorEnvase: "8",price:"100",pictureUrl:"https://www.deskidea.com/12138-large_default/cafe-dolce-gusto-capuchino-monodosis-caja-de-8-unidades.jpg"},
    {id:3, title: "Nespresso",category:"Nespresso", description: "lungo",unidadesPorEnvase: "8",price:"100",pictureUrl:"https://www.nespresso.com/shared_res/agility/n-components/pdp/sku-main-info/coffee-sleeves/ol/ispirazione-roma_L.png?impolicy=medium&imwidth=600"},
    {id:4, title: "Carrefour", category:"DolceGusto",description: "lungo",unidadesPorEnvase: "8",price:"100",pictureUrl:"https://capsulasnespresso.com/wp-content/uploads/2018/03/admin-ajax.php_-300x137.png"},
]


export const  getProducts= () => {
    const promise = new Promise ((resolve)=> {
        setTimeout (() =>{
            return resolve (products); 
        },2000)
    })
return promise
 };

 export const getProduct = (id) =>{
    const promise =new Promise ((resolve) => {
        const result = products.find((product) => product.id === parseInt(id))
        setTimeout (() =>{
            return resolve (result);
        },2000)
    })
 return promise;

 };
   
export const getProductByCategory = (categoryId)=>{
    const promise =new Promise ((resolve) => {
    const shows=products.filter((product) => product.category === categoryId);
    setTimeout(() => {
        return resolve(shows);
    },2000)
    })
        return promise};