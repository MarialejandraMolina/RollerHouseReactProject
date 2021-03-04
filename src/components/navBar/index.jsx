import './navBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


const NavbarComponent = () => {
    return (
        <div className="contenedor">
            <div className="logo">
                <h1>RollerHouse</h1>
            </div>
            <div className="items">
                <Link to= {`patines`}>PATINES</Link>
                <Link to= {`ls`}>LONGBOARD/SKATES</Link>
                <Link to= {`q4`}>QUADS/4RUEDAS</Link>
                <Link to= {`ac`}>ACCESORIOS</Link>
                <Link to= {`co`}>CONTACTO</Link>
                <Link to= {`sc`}><FontAwesomeIcon icon={faShoppingCart} /></Link>
            </div>
        </div>
    );
}

export default NavbarComponent;