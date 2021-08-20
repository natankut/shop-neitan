import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import ItemListCont from "./components/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">

      <header className="App-header">

        {NavBar}

      </header>

      <section>
        <ItemListCont />

      </section>
      <footer>

        {Footer}

      </footer>

    </div>
  );
}

export default App;
