import { Link } from "react-router-dom";
import "../assets/NavBar.css";

export function NavBar() {
    return (
        <nav>
            <Link to="/">Products</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    );
}