import PropTypes from 'prop-types';

const Card = ({ name, username, id }) => {
    const addFav = () => {
        // Aqui iria la logica para agregar la Card en el localStorage
    };

    return (
        <div className="card">
            {/* En cada card deberán mostrar en name - username y el id */}
            <p>{name}</p>
            <p>{username}</p>
            <p>{id}</p>
            {/* No debes olvidar que la Card a su vez servirá como Link hacia la pagina de detalle */}

            {/* Además, deberán integrar la lógica para guardar cada Card en el localStorage */}
            <button onClick={addFav} className="favButton">
                Add fav
            </button>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string,
    username: PropTypes.string,
    id: PropTypes.number,
};

export default Card;
