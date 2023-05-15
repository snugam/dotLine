import React from 'react';
import './selector.scss';

const Selector: React.FC<ISelectHandler> = ({ propname, fieldname, options, onchange }) => {

    return (
        <div className="propselector" id={propname}>
            <label htmlFor={`${propname}Selection`}>{fieldname}</label>
            <select id={`${propname}Selection`} onChange={onchange}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Selector;
