import React from 'react';
import GridCell from './gridCell';
import './style.css';

const GridRow = ({ rowIndex, location }) => {
    const columnIndex = [0, 1, 2, 3, 4];
    return (
        <div className="grid-row">
            {columnIndex.map(idx => <GridCell key={`${rowIndex}.${idx}`} y={rowIndex} x={idx} location={location} />)}
        </div>
    );
};

export default GridRow;