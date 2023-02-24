import React from 'react';
import Cell from "./Cell";

const Table = ({cells, onClick}) => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-8 w-[500px] h-[500px] text-red-600">
            {cells.map((item, index) =>
                <Cell
                    key={index}
                    value={item}
                    onClick={() => onClick(index)}
                    className={item === 'X' ? 'text-red-600' : item === 'O' ? 'text-blue-600' : ''}
                > {item}
                </Cell>)}
        </div>
    );
};

export default Table;