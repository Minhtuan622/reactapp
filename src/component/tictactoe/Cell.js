import React from 'react';

const Cell = ({value, onClick, className}) => {
    return <div className={`cursor-pointer flex justify-center text-9xl shadow-lg ${className}`} onClick={onClick}>{value}</div>
};

export default Cell;