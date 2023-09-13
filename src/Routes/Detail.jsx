//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useParams } from 'react-router-dom';
import { URI } from '../Context/Context.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Detail = () => {
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    const { id } = useParams();
    const [dentist, setDentist] = useState({
        id: Number(id),
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
    });

    useEffect(() => {
        (async () => {
            try {
                const response = await axios(`${URI}/${id}`);
                setDentist(response.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);

    return (
        <>
            <h1>Detail Dentist id {dentist.id}</h1>
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
            {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
            <h1>{dentist.name}</h1>
            <p>📧 Email: {dentist.email}</p>
            <p>📞 Phone: {dentist.phone}</p>
            <p>
                <a href={`https://www.${dentist.website}`} target="_blank" rel="noreferrer">
                    🌐 Website
                </a>
            </p>
        </>
    );
};

export default Detail;
