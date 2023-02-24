import React, {useReducer} from 'react';

const reduce = (state, action) => {
    switch (action) {
        case 'THEM': return state += 1
        case 'GIAM': return state -= 1
        case 'XOA': return 0
        default: return state
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reduce, 0)
    const btnClass = "bg-emerald-600 text-white px-5 py-2 rounded-xl m-2"
    return (
        <div>
            <button className={btnClass} onClick={() => dispatch('THEM')}>THÊM</button>
            <button className={btnClass} onClick={() => dispatch('GIAM')}>GIẢM</button>
            <button className={btnClass} onClick={() => dispatch('XOA')}>XÓA</button>
            <p className="mr-3">Count: {state}</p>
        </div>
    );
};

export default Reducer;