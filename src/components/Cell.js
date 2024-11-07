import React, { useState, useContext } from 'react';
import { CountContext } from './CountContext';

const Cell = () => {
    const [isOn, setIsOn] = useState(false);
    const { toggleCount } = useContext(CountContext);

    const toggleCell = () => {
        setIsOn(!isOn);
        toggleCount(!isOn ? 1 : -1);
    };

    const cellStyle = {
        width: '100px',
        height: '100px',
        border: '1px solid grey',
        backgroundColor: isOn ? 'black' : 'white',
    };

    return <div style={cellStyle} onClick={toggleCell}></div>;
};

export default Cell;
