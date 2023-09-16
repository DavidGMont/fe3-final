import { Link } from 'react-router-dom';
import { useGlobalStates } from '../Context/Context.jsx';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
    const { state, dispatch } = useGlobalStates();

    const handleClick = () => dispatch({ type: 'TOGGLE_THEME', payload: state.isDark });

    return (
        <nav className={styles.nav}>
            <Link to={'/'}>
                <img
                    src="/src/assets/img/dr-dparkling-logo.svg"
                    alt="Dr. Sparkling\'s Dental Clinic Logo"
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
            <button title="Toggle color theme" type="button" onClick={handleClick}>
                Toggle {state.isDark ? 'Dark' : 'Light'}
            </button>
        </nav>
    );
};

export default Navbar;
