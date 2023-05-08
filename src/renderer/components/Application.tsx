import React, { useState } from 'react';
import './Application.scss';
import RateSelector from './tickRate';
import SetTheme from './setTheme';
// import GreenyDots from './dots/drawDots';
import GreenDots from './dots/drawDots';


const Application: React.FC = () => {

  const [tickrate, setTickRate] = useState<number>(650);

  const incrementHandle = () => {
    setTickRate(tickrate + 100);
  };
  const decrementHandle = () => {
    setTickRate(tickrate - 100);
  }

  return (
    <div id='dotLiner'>
      <div className='header'>
        <RateSelector currentrate={tickrate} increment={incrementHandle} decrement={decrementHandle} />
      </div>
      <div className='main-body'>
        {/* <GreenyDots currentRate={tickrate} /> */}
        <GreenDots currentrate={tickrate} />
      </div>
      <div className='footer'>
        <SetTheme />
      </div>
    </div>
  );
};

export default Application;
