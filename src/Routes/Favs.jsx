import { useGlobalStates } from '../Context/Context.jsx';
import Card from '../Components/Card.jsx';
import styles from '/src/styles/Favs.module.scss';
import Info from '../Components/Info.jsx';

const Favs = () => {
    const { state } = useGlobalStates();
    return (
        <>
            <h1>
                <i className="fa-solid fa-star"></i> Favorite Dentists
            </h1>
            <div className={styles.home}>
                {state.favorites.length > 0 ? (
                    state.favorites.map((dentist) => <Card dentist={dentist} key={dentist.id} />)
                ) : (
                    <Info
                        color={'#9b5151'}
                        feedback={
                            "You don't have any favorite dentist yet, add at least one to preview it here!"
                        }
                        icon={'fa-solid fa-circle-xmark'}
                    />
                )}
            </div>
        </>
    );
};

export default Favs;
