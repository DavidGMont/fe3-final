//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useGlobalStates } from '../Context/Context.jsx';
import Card from '../Components/Card.jsx';

const Home = () => {
    const { data } = useGlobalStates();
    return (
        <main className="">
            <h1>Home</h1>
            <div className="card-grid">
                {/* Aqui deberias renderizar las cards */}
                {data.map((dentist) => (
                    <Card
                        name={dentist.name}
                        username={dentist.username}
                        id={dentist.id}
                        key={dentist.id}
                    />
                ))}
            </div>
        </main>
    );
};

export default Home;
