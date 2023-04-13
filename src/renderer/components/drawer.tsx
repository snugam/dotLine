import React, { useState } from 'react';
import './drawer.scss';

const drawer: React.FC = () => {

    return (
        <div id="drawing-area">
            <canvas></canvas>
        </div>
    );
};

export default drawer;