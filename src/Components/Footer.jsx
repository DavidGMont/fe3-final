import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.scss';
import { useGlobalStates } from '../Context/Context.jsx';

const Footer = () => {
    const { state } = useGlobalStates();

    return (
        <>
            <footer className={styles.footer}>
                <div>
                    <Link to={'/'}>
                        <img
                            src="/src/assets/img/dr-dparkling-logo.svg"
                            alt="Dr. Sparkling\'s Dental Clinic Logo"
                        />
                    </Link>
                    <p>Proper Care, Happy Life</p>
                </div>
                <div className={styles.divisor}></div>
                <nav style={state.isDark ? { filter: 'invert(100%)' } : { filter: 'none' }}>
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
                </nav>
                <div className={styles.divisor}></div>
                <nav style={state.isDark ? { filter: 'invert(100%)' } : { filter: 'none' }}>
                    <p>Connect with us!</p>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-regular fa-envelope"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-tiktok"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
};

export default Footer;
