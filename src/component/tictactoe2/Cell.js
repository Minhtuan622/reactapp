import React from 'react';

const Cell = ({value, onClick, className}) => {
    return (
        <div className={`shadow-2xl bg-slate-700 rounded-xl cursor-pointer text-7xl flex justify-center items-center ${className}`} onClick={onClick}>{value}</div>
    );
};

export default Cell;