import { useGlobalStates } from '../Context/Context.jsx';
import Card from '../Components/Card.jsx';
import styles from '/src/styles/Favs.module.scss';

const Favs = () => {
    const { state } = useGlobalStates();
    return (
        <>
            <h1>
                <i className="fa-solid fa-star"></i> Favorite Dentists
            </h1>
            <div className={styles.home}>
                {state.favorites.map((dentist) => (
                    <Card dentist={dentist} key={dentist.id} />
                ))}
            </div>
        </>
    );
};

export default Favs;
