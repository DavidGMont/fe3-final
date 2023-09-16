import { Link } from 'react-router-dom';
import { useGlobalStates } from '../Context/Context.jsx';
import styles from '../styles/Navbar.module.scss';
import logo from '../assets/img/dr-dparkling-logo.svg';

const Navbar = () => {
    const { state, dispatch } = useGlobalStates();

    const handleClick = () => dispatch({ type: 'TOGGLE_THEME', payload: state.isDark });

    return (
        <nav className={styles.nav}>
            <Link to={'/'}>
                <img
                    src={logo}
                    alt="Dr. Sparkling\'s Dental Clinic Logo"
                    style={state.isDark ? { filter: 'invert(100%)' } : { filter: 'none' }}
                />
            </Link>

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
            <span>
                <button title="Toggle color theme" type="button" onClick={handleClick}>
                    {state.isDark ? (
                        <i className="fa-regular fa-sun"></i>
                    ) : (
                        <i className="fa-regular fa-moon"></i>
                    )}
                </button>
            </span>
        </nav>
    );
};

export default Navbar;
