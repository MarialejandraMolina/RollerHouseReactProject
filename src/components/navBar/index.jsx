import './navBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'


const NavbarComponent = () => {
    return (
        <div className="contenedor">
            <div className="logo">
                <h1>RollerHouse</h1>
            </div>
            <div className="items">
                <a href="#">PATINES</a>
                <a href="#">LONGBOARD/SKATES</a>
                <a href="#">QUADS/4RUEDAS</a>
                <a href="#">ACCESORIOS</a>
                <a href="#">CONTACTO</a>
                <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
            </div>
        </div>
    );
}

export default NavbarComponent;