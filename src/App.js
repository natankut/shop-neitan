import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/itemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import Home from "./pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartProvider from './context/CartContext';
import Cart from './components/Cart';
import CartForm from './components/CartForm';
function App() {

  return (

    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/category/:category">
            <ItemListContainer component={ItemListContainer} />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer component={ItemDetailContainer} />
          </Route>
          <Route exact path="/cart">
            <Cart component={Cart} />
          </Route>
          <Route exact path="/cartForm">
            <CartForm component={CartForm} />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider >

  );
}

export default App;
