import { useParams } from 'react-router-dom';
import { URI, useGlobalStates } from '../Context/Context.jsx';
import { useEffect } from 'react';
import { pics } from '../utils/pics.js';
import axios from 'axios';
import styles from '/src/styles/Detail.module.scss';

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
        <article className={styles.detail}>
            <h1>{state.dentist.name}</h1>
            <p>{pics[id].speciality}</p>
            <p>
                <i className="fa-solid fa-award"></i> Top #{state.dentist.id}
            </p>
            <img src={pics[id].pic} alt={state.dentist.name} />
            <p>{pics[id].summary}</p>
            <h2>Book an appointment now!</h2>
            <p>
                <i className="fa-solid fa-envelope"></i> Email: {state.dentist.email.toLowerCase()}
            </p>
            <p>
                <i className="fa-solid fa-phone"></i> Phone: {state.dentist.phone}
            </p>
            <p>
                <i className="fa-solid fa-globe"></i>
                <a href={`https://www.${state.dentist.website}`} target="_blank" rel="noreferrer">
                    {` www.${state.dentist.website}`}
                </a>
            </p>
        </article>
    );
};

export default Detail;
