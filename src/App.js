import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/itemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import Home from "./pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartProvider from './context/CartContext';
import Cart from './components/Cart';

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
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route>
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider >
  );
}

export default App;
