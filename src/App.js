import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemDetailContainer/ItemListContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Checkout from './components/Cart/Checkout';
import { CartProvider } from './components/context/cartContext';
import Container from 'react-bootstrap/Container';


function App() {
 
return (
  <BrowserRouter>
  <CartProvider>
    <Container>       
    <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path = 'category/:categoryId'  element={<ItemListContainer greeting={"Promociones"}/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path= '/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        </Container>
        </CartProvider>
        </BrowserRouter>
    );
}

export default App;
