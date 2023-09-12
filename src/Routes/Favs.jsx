//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useGlobalStates } from '../Context/Context.jsx';
import Card from '../Components/Card.jsx';

const Favs = () => {
    const { favorites } = useGlobalStates();
    return (
        <>
            <h1>Dentists Favs</h1>
            <div className="card-grid">
                {/* este componente debe consumir los destacados del localStorage */}
                {/* Deberan renderizar una Card por cada uno de ellos */}
                {favorites.map((dentist) => (
                    <Card dentist={dentist} key={dentist.id} />
                ))}
            </div>
        </>
    );
};

export default Favs;
