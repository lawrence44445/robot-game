import React from 'react';
import './style.css';

const GridCell = ({ x, y, location = {} }) => {
    const cellClass = x === location.x && y === location.y ? 'cell selected' : 'cell';
    return (
    <div className={cellClass}><span>{x === location.x && y === location.y ? location.dir : ''}</span></div>
    );
};

export default GridCell;