import { useContext, useState } from "react";
import { Button, Table, Container } from "react-bootstrap";
import CartContext from "../context/cartContext";
import { Link } from "react-router-dom"; 
import { createOrder } from "../utils/orders";
import { BsTrash2Fill}  from "react-icons/bs";
import OrderModal from "../OrderModal/OrderModal";



const buyerMock = {
    name: '',
    phone: '',
    email: ''
}

const Cart = () => {
    const { cart, total, removeItem, clear } = useContext(CartContext);
    const [user, setUser] = useState(buyerMock);
    const [showModal, setShowModal] = useState(false);
    const [orderId, setOrderId] = useState();

    const handleRemove = (itemId) => {
    removeItem(itemId);
}

    const handleOpen = () => setShowModal(true);

    const handleClose = () => setShowModal(false);

    const handleBuy = async () => {
    const newOrder = {
        buyer: buyerMock,
        items: cart,
        total
    };

    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear();
}
const showTable = cart.length > 0

return (
    <Container className='cartContainer'>
    <h4>Carrito de compras</h4>
    {showTable && (
        <>
        <Table striped bordered hover variant="light">
            <thead>
            <tr>
                <th>Titulo</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Accion</th>
            </tr>
            </thead>
            <tbody>
                {cart.map((item) => (
                <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td><BsTrash2Fill onClick={() => handleRemove(item.id)}/></td>
                </tr>
                ))}
            </tbody>
        </Table>
        <h3>Total: $ {total}</h3>
        <Button variant="success" onClick={handleOpen}>Finalizar compra</Button>
        </>
    )}
    {!showTable && (
        <>
    
        <h3>Vaciar carrito</h3>
   
        <Link to='/'>
            <Button variant="success">Ver productos</Button>
        </Link>
        
        </>
    )}
    <OrderModal
        showModal={showModal}
        onClose={handleClose}
        onBuy={handleBuy}
        orderId={orderId}
    />
    </Container>
    );
}

export default Cart;
