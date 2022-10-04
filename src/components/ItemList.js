import Item from "./Item";

//agrupador de item se debe incluir dentro del item list container//
const ItemList = (products) => {
    return (   
        <>         
         <h1>item list</h1>
         {products.map((product)=>(
            <Item key={product.id} product={product}/>

         ))}

    
         </>
    );}
     

export default ItemList;
