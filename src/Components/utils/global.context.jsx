import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const initialState = { isDark: false, data: [] };

export const GlobalStates = createContext(initialState);

const GlobalContext = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const [data, setData] = useState([]);

    const URI = 'https://jsonplaceholder.typicode.com/users';
    useEffect(() => {
        (async () => {
            try {
                const response = await axios(URI);
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <GlobalStates.Provider value={{ isDark, data, setIsDark }}>
            {children}
        </GlobalStates.Provider>
    );
};

GlobalContext.propTypes = {
    children: PropTypes.any,
};

export default GlobalContext;

export const useGlobalStates = () => useContext(GlobalStates);
