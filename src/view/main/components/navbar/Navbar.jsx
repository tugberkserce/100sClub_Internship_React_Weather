import './Navbar.css'
import { IoAdd, IoList } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Navbar(){
    
    return (
        <div className="navbar">
            <Link to="/add" className="add-new">
                <IoAdd />
            </Link>
            <Link to="/list" className="go-to-list">
                <IoList />
            </Link>
        </div>
    )
}

export default Navbar;