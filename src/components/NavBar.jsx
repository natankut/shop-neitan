import cssNavBar from "../css/NavBar.css";
import CartWidget from './CartWidget';

function NavBar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="nav-item navStart">
                        <a className="nav-link active" aria-current="page" href="#">ROLLING</a>
                    </div>
                    <ul className="navbar-nav navCenter">
                        <li className="nav-item">
                            <a className="nav-link" href="#">NEW ARRIVALS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PRODUCTOS</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                LOCALES
                            </a>
                        </li>
                    </ul>

                    <CartWidget />

                </div>
            </div>
        </nav>
    );
}


export default NavBar();