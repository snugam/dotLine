import React, { useEffect, useState } from 'react';
import './setTheme.scss';

const SetTheme: React.FC = () => {
    const [darkTheme, setDarkTheme] = useState(true);

    /**
     * On component mount
     */
    useEffect(() => {
        const useDarkTheme = parseInt(localStorage.getItem('dark-mode')!);
        if (isNaN(useDarkTheme)) {
            setDarkTheme(true);
        } else if (useDarkTheme == 1) {
            setDarkTheme(true);
        } else if (useDarkTheme == 0) {
            setDarkTheme(false);
        }

    }, []);

    /**
     * On Dark theme change
     */
    useEffect(() => {
        if (darkTheme) {
            localStorage.setItem('dark-mode', '1');
            document.body.classList.add('dark-mode');
        } else {
            localStorage.setItem('dark-mode', '0');
            document.body.classList.remove('dark-mode');
        }
    }, [darkTheme]); //[darkTheme] <-- this is called a dpendency array;

    /**
     * Toggle Theme
     */
    function toggleTheme() {
        setDarkTheme(!darkTheme);
    }

    return (
        <button className='wide' onClick={toggleTheme}>
            {
                darkTheme ? 'Light Theme' : 'Dark Theme'  //This sets the innerHtml only
            }
        </button>
    );
};

export default SetTheme;
