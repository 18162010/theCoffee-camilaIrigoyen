import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const{id}=useParams();
    return (<h2> Detalle del producto</h2> );
}
 
export default ItemDetailContainer;