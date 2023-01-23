import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className='nav'>
            <span>
                <Link to="/">Search</Link>
            </span>
            <span>
                <Link to="/saved">Saved</Link>
            </span>
        </nav>
    );
}

export default NavBar;