import React, { useState } from 'react';
import './FlickerRate.scss';

interface SetValueProps {
    onValueChange: (value: number) => void;
}

const TickRate: React.FC<SetValueProps> = ({ onValueChange }) => {
    const [count, setCount] = useState(650);

    const increment = () => {
        setCount(count + 100);
        onValueChange(count);
    };

    const decrement = () => {
        setCount(count - 100);
        onValueChange(count);
    }

    return (
        <div className="counter">
            <div role='paragraph'>Set Count</div>
            <div id='counterControl'>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>

            </div>
            <input
                // defaultValue={count}
                id="display-count"
                // onKeyUp={handleRMCKeyUp}
                // onClick={handleRMCClick}
                // onFocus={handleFocusEvent}
                // onBlur={handleFocusEvent}
                role='paragraph' value={count} />
        </div>
    );
};

export default TickRate;
