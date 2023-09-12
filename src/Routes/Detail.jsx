//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useParams } from 'react-router-dom';
import Card from '../Components/Card.jsx';
import { useGlobalStates } from '../Context/Context.jsx';

const Detail = () => {
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    const { data } = useGlobalStates();
    const { id } = useParams();
    const dentist = data[id - 1];

    return (
        <>
            <h1>Detail Dentist id {id}</h1>
            <Card dentist={dentist} />
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
            {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        </>
    );
};

export default Detail;
