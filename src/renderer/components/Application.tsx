import React from 'react';
import './Application.scss';
import Counter from './counter';
import SetTheme from './setTheme';
import Tabs from './tabs/main';

const Application: React.FC = () => {

  return (
    <div id='dotLiner'>
      <div className='header'>
        <Counter />
      </div>
      <div className='main-body'>
        <Tabs />
      </div>
      <div className='footer'>
        <SetTheme />
      </div>
    </div>
  );
};

export default Application;
