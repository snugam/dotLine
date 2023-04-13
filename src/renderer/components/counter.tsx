import React, { useState } from 'react';
import './counter.scss'

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className="counter">
            <div role='paragraph'>Set Count</div>
            <div id='counterControl'>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>

            </div>
            <div id="display-count" role='paragraph'>{count}</div>
        </div>
    );
};

export default Counter;
