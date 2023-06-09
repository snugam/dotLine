import React from 'react';
import './valuecounter.scss'

const ValueCounter: React.FC<ICounterHandler<number>> = ({ propname, fieldname, value, increment, decrement }) => {

    return (
        <div className="propselector" id={propname}>
            <label htmlFor={`${propname}Increment`}>{fieldname}</label>
            <div id={`${propname}Increment`}>
                <input
                    role='paragraph'
                    value={value} readOnly />
                <button
                    onClick={increment}>+</button>
                <button
                    onClick={decrement}>-</button>
            </div>
        </div>
    );
};

export default ValueCounter;
