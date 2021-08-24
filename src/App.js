import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/itemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import Home from "./pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

  return (
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

      </Switch>
    </BrowserRouter>
  );
}

export default App;
