import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useGlobalStates } from '../Context/Context.jsx';
import { pics } from '../utils/pics.js';
import styles from '../styles/Card.module.scss';

const Card = ({ dentist }) => {
    const { dispatch } = useGlobalStates();

    const handleClick = () => dispatch({ type: 'ADD_FAVORITE', payload: dentist });

    return (
        <article className={styles.card}>
            <Link to={`/dentist/${dentist.id}`}>
                <img src={pics[dentist.id].pic} alt={dentist.name} />
                <h2>{dentist.name}</h2>
                <p>Specialist in:</p>
                <p>{pics[dentist.id].speciality}</p>
                <p>
                    <i className="fa-solid fa-award"></i> Top #{dentist.id}
                </p>
                <p>@{dentist.username.toLowerCase()}</p>
            </Link>
            <button onClick={handleClick}>
                <i className="fa-regular fa-star"></i>
            </button>
        </article>
    );
};

Card.propTypes = {
    dentist: PropTypes.object,
};

export default Card;
