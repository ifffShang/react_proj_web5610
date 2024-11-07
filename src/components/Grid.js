import React, { useContext } from 'react';
import Cell from './Cell';
import { CountContext } from './CountContext';

const Grid = () => {
    const { count } = useContext(CountContext);

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 100px)',
        gap: '5px',
    };

    return (
        <div>
            <h1>On Cells Count: {count}</h1>
            <div style={gridStyle}>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>
        </div>
    );
};

export default Grid;
