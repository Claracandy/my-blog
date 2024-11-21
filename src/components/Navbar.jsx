import { Link } from "react-router-dom"
import './Navbar.css'
 function Navbar() {
    return (
        <nav style = { { marginBottom: "30px", borderBottom :"1px,solid #ddd"}}> 
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/counter">Counter</Link>

        </nav>
    );
}
export default Navbar;