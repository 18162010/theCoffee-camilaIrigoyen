import ItemList from "./ItemList";

const products=[
    {id:"1", marca: "Dolce gusto", variedad: "lungo",unidadesPorEnvase: "16"},
    {id:"2", marca: "Dolce gusto", variedad: "lungo",unidadesPorEnvase: "8"},
    {id:"3", marca: "Nespresso", variedad: "lungo",unidadesPorEnvase: "8"},
    {id:"4", marca: "Carrefour", variedad: "lungo",unidadesPorEnvase: "8"},
]

const ItemListContainer = ({greeting}) => {
    return (
        <div> 
            <h1>Productos</h1>
            <h3 className="text-bg-primary p-3">{greeting}</h3>
            <ItemList products={products}/>
        </div>
     );
}
 
export default ItemListContainer;