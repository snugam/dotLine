import React, { useState } from 'react';
import './Application.scss';
import SetTheme from './setTheme';
import Settings from './dots/settings';
import GreenDots from './dots/dotsdraw';
import NeuralActivate from './neural';

const Application: React.FC = () => {

  const [tickrate, setTickRate] = useState<number>(650);
  const [canvasWidth, setCanvasWidth] = useState<number>(500);
  const [canvasHeight, setCanvasHeight] = useState<number>(500);
  const [shapeSelected, setShapeSelected] = useState<ISelectHandlerOption>({ label: 'Square', value: 'square' });

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
      },
      shapeSelect: {
        propname: `shapetype`,
        fieldname: 'Select a Shape Type',
        options: [{ label: 'Square', value: 'square' }, { label: 'Circle', value: 'circle' }],
        value: shapeSelected,
        onchange: function (ev) {
          switch (ev.target.value) {
            case 'square':
              setShapeSelected({ label: 'Square', value: 'square' });
              break;
            case 'circle':
              setShapeSelected({ label: 'Circle', value: 'circle' });
              break;
            default:
              alert('hit default');
              break;
          }
        }
      }
    }
  };

  return (
    <div id='dotLiner'>
      <div id="panel-left">
        <div className='header'>
          {/* <Blocks /> */}
        </div>
        <div className='main-body'>
          <NeuralActivate />
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
