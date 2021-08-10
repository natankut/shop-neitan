import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import ItemListCont from "./components/ItemListContainer";

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
