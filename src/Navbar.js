import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './css-styles/navbar_stylesheet.css';
import logo from './logo.svg';
const Navbar = () => {
    return ( 
        <div className = "navbar">
            <nav>
                <ul>
                    <div className = 'logo'><img src = {logo} /></div>
                    <h1>Journey</h1>
                </ul>
                <ul>
                    <li><Link to = "/"><i className = "fa fa-home"></i>Home</Link></li>
                    <li><Link to = "/create"><i className = "fa fa-add"></i>Create</Link></li>
                    <li><Link to = "/about"><i className = "fa fa-info-circle"></i>About</Link></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;