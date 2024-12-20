import { Link } from "react-router-dom"
import './Navbar.css'
 function Navbar() {
    return (
        <nav style = { { marginBottom: "30px", borderBottom :"1px,solid #ddd"}}> 
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/Form">Form</Link>
            <Link to="/BlogList">BlogList</Link>
            <Link to="/WizardForm">WizardForm</Link>
            <Link to="/DataFetch">DataFetch</Link>
            <Link to="/Users">Users</Link>
            <Link to="/Github">Github</Link>
            <Link to="/Googlebooks">Googlebooks</Link>



        </nav>
    );
}
export default Navbar;