const ItemListContainer = ({greeting}) => {
    return (
        <div> 
            <h1>Productos</h1>
            <h3 className="text-bg-primary p-3">{greeting}</h3>
        </div>
     );
}
 
export default ItemListContainer;