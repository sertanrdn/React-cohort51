import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <nav>
            <Link to="/">Products</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    );
}