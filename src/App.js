import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemDetailContainer/ItemListContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Checkout from './components/Cart/Checkout';



function App() {
  return (

    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"promociones"}/>}/>
          <Route path = 'category/:categoryId'  element={<ItemListContainer greeting={"promociones"}/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path= '/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;
