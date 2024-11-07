import React, { createContext, useState } from 'react';

const CountContext = createContext();

const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const toggleCount = (change) => {
        setCount(count + change);
    };

    return (
        <CountContext.Provider value={{ count, toggleCount }}>
            {children}
        </CountContext.Provider>
    );
};

export { CountContext, CountProvider };
