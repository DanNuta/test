import {Link} from "react-router-dom"
import style from "../css/Navbar.module.scss";

const Navbar = () => {

    return ( 
        <nav className={style.nav}>

            <ul>
                <li><Link to="/">Logo</Link></li>
            </ul>


            <ul className={style.links}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;