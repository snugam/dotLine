import React, { useState } from 'react';
import './Application.scss';
import SetTheme from './setTheme';
import Settings from './dots/settings';
import GreenDots from './dots/dotsdraw';

const Application: React.FC = () => {

  const [tickrate, setTickRate] = useState<number>(650);
  const [canvasWidth, setCanvasWidth] = useState<number>(500);
  const [canvasHeight, setCanvasHeight] = useState<number>(500);

  const flashFaster = () => { setTickRate(tickrate + 100) }
  const flashSlower = () => { setTickRate(tickrate - 100) }

  const canvasWidthPlus = () => { setCanvasWidth(canvasWidth + 10) }
  const canvasWidthMinus = () => { setCanvasWidth(canvasWidth - 10) }

  const canvasHeightPlus = () => { setCanvasHeight(canvasHeight + 10) }
  const canvasHeightMinus = () => { setCanvasHeight(canvasHeight - 10) }

  const mySettings: IAppConfig = {
    appconfig: {
      dotConfig: {
        propname: 'flashrate',
        fieldname: 'ColChange Rate',
        value: tickrate,
        increment: flashFaster,
        decrement: flashSlower
      },
      canvasConfig: {
        width: canvasWidth,
        height: canvasHeight,
        canvasHeightConfig: {
          propname: 'canvasheight',
          fieldname: 'Set Height',
          value: canvasHeight,
          increment: canvasHeightPlus,
          decrement: canvasHeightMinus
        },
        canvasWidthConfig: {
          propname: 'canvaswidth',
          fieldname: 'Set Width',
          value: canvasWidth,
          increment: canvasWidthPlus,
          decrement: canvasWidthMinus,
        }
      }
    }
  };

  return (
    <div id='dotLiner'>
      <div id="panel-left">
        <div className='header'>

        </div>
        <div className='main-body'>
          {/* <GreenyDots currentRate={tickrate} /> */}
          <GreenDots appconfig={mySettings.appconfig} />
        </div>
        <div className='footer'>
          <SetTheme />
        </div>
      </div>
      <div id="panel-right">
        <Settings appconfig={mySettings.appconfig} />
      </div>

    </div>
  );
};

export default Application;
