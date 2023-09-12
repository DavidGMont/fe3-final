//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useGlobalStates } from '../Context/Context.jsx';
import Card from '../Components/Card.jsx';

const Home = () => {
    const { data } = useGlobalStates();
    return (
        <main className="">
            <h1>Home</h1>
            <div className="card-grid">
                {data.map((dentist) => (
                    <Card dentist={dentist} key={dentist.id} />
                ))}
            </div>
        </main>
    );
};

export default Home;
