import React from 'react';
import GridRow from './gridRow';
import './style.css';

const Grid = ({ location }) => {
    const rows = [4, 3, 2, 1, 0];
    return (
        <div>
        {rows.map(row => <GridRow key={`${row}`} rowIndex={row} location={location} />)}
        </div>
    );
};

export default Grid;