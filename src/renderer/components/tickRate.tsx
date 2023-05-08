import React from 'react';
import './tickRate.scss';

const RateSelector: React.FC<ColorChangeRateProps> = ({ currentrate: currentRate, increment, decrement }) => {

    return (
        <div className="counter">
            <div role='paragraph'>Set Count</div>
            <div id='counterControl'>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <input
                id="display-count"
                role='paragraph'
                value={currentRate} readOnly />
        </div>
    );
};

export default RateSelector;
