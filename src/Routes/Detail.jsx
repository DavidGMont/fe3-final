import { useParams } from 'react-router-dom';
import { URI, useGlobalStates } from '../Context/Context.jsx';
import { useEffect } from 'react';
import { pics } from '../utils/pics.js';
import axios from 'axios';

const Detail = () => {
    const { state, dispatch } = useGlobalStates();
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios(`${URI}/${id}`);
                dispatch({ type: 'GET_DENTIST', payload: response.data });
            } catch (error) {
                console.log(error);
            }
        })();
    }, [dispatch, id]);

    return (
        <>
            <h1>Detail Dentist id {state.dentist.id}</h1>
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
            {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
            <h1>{state.dentist.name}</h1>
            <img src={pics[id]} alt={state.dentist.name} />
            <p>📧 Email: {state.dentist.email}</p>
            <p>📞 Phone: {state.dentist.phone}</p>
            <p>
                <a href={`https://www.${state.dentist.website}`} target="_blank" rel="noreferrer">
                    🌐 Website
                </a>
            </p>
        </>
    );
};

export default Detail;
