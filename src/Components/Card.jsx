import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useGlobalStates } from '../Context/Context.jsx';

const Card = ({ dentist }) => {
    const { dispatch } = useGlobalStates();

    const handleClick = () => dispatch({ type: 'ADD_FAVORITE', payload: dentist });

    return (
        <div className="card">
            {/* En cada card deberán mostrar en name - username y el id */}
            <Link to={`/dentist/${dentist.id}`}>
                <p>{dentist.name}</p>
                <p>@{dentist.username.toLowerCase()}</p>
                <p>{dentist.id}</p>
            </Link>
            {/* No debes olvidar que la Card a su vez servirá como Link hacia la pagina de detalle */}

            {/* Además, deberán integrar la lógica para guardar cada Card en el localStorage */}
            <button onClick={handleClick} className="favButton">
                Add fav
            </button>
        </div>
    );
};

Card.propTypes = {
    dentist: PropTypes.object,
};

export default Card;
