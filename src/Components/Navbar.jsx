//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
            {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                    <Link to={'/favs'}>Favorites</Link>
                </li>
            </ul>
            <button title={'Toggle color theme'} type={'button'}>
                Change theme
            </button>
        </nav>
    );
};

export default Navbar;
