import React, { useEffect, useRef } from 'react';

import './drawDots.scss';

enum Color {
  Cyan = "Cyan",
  Magenta = "Magenta",
  Yellow = "Yellow",
  Green = "Green",
  Blue = "Blue"
}

class selectShadeFrom {
  selectShade(fromColor?: Color) {

    if (typeof fromColor == 'undefined') {
      const values = Object.values(Color);
      const randomIndex = Math.floor(Math.random() * values.length);

      switch (values[randomIndex]) {
        case 'Cyan':
          return this.getRandomCyanShade();
        case 'Green':
          return this.getRandomGreenShade();
        case 'Magenta':
          return this.getRandomMagentaShade();
        case 'Yellow':
          return this.getRandomCyanShade();
        case 'Blue':
          return this.getRandomBlueShade();
      }
    } else {
      return this[`getRandom${fromColor}Shade`]();
    }
  }
  private getRandomGreenShade(): string {
    const hue = Math.floor(Math.random() * 41) + 100; // Random hue value between 100 and 140
    const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation value between 50 and 100
    const lightness = Math.floor(Math.random() * 21) + 40; // Random lightness value between 40 and 60
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  private getRandomCyanShade(): string {
    const hue = Math.floor(Math.random() * 41) + 160; // Random hue value between 160 and 200
    const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation value between 50 and 100
    const lightness = Math.floor(Math.random() * 21) + 40; // Random lightness value between 40 and 60
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  private getRandomBlueShade(): string {
    const hue = Math.floor(Math.random() * 361); // Random hue between 0 and 360
    const saturation = Math.floor(Math.random() * 101); // Random saturation between 0% and 100%
    const lightness = Math.floor(Math.random() * 51) + 50; // Random lightness between 50% and 100%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`; // Construct and return the HSL color string
  }
  private getRandomMagentaShade(): string {
    const hue = Math.floor(Math.random() * 41) + 280; // Random hue value between 280 and 320
    const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation value between 50 and 100
    const lightness = Math.floor(Math.random() * 21) + 40; // Random lightness value between 40 and 60
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  private getRandomYellowShade(): string {
    const hue = Math.floor(Math.random() * 41) + 280; // Random hue value between 280 and 320
    const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation value between 50 and 100
    const lightness = Math.floor(Math.random() * 21) + 40; // Random lightness value between 40 and 60
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
}

interface dotInfo {
  x?: number,
  y?: number,
  r: number;
  color: string;
}
interface squareInfo {
  x: number;
  y: number;
  w: number;
  h: number;
}

class MyCanvas2 {

  flashCount = 0;
  x = 0;
  y = 0;
  r = 7;
  f = 0;
  dots: Array<dotInfo>;
  squares: Array<squareInfo>;
  shadeslect: selectShadeFrom;
  cvsWidthT = 0;
  cvsHeightT = 0;
  constructor() {
    this.shadeslect = new selectShadeFrom;
    this.dots = new Array<dotInfo>();
    this.squares = new Array<squareInfo>();
    this.y = (this.r * 2);
    this.x = (this.r * 2);
    this.f = 35;
  }

  circleBuild(cvsWidth: number, cvsHeight: number) {

    const xBlockCount = Math.ceil(cvsWidth / this.f);
    const yBlockCount = Math.ceil(cvsWidth / this.f);

    const radiusCalc = Math.floor(cvsWidth / xBlockCount);

    const notUsedX = cvsWidth - (xBlockCount * radiusCalc);
    const notUsedY = cvsHeight - (yBlockCount * radiusCalc);

    // Loop over each block and calculate its middle point
    for (let yC = 0; yC < yBlockCount; yC++) {
      for (let xC = 0; xC < xBlockCount; xC++) {

        const posY = (radiusCalc * yC) + Math.ceil(notUsedY * 0.5) + radiusCalc;
        const posX = (radiusCalc * xC) + Math.ceil(notUsedX * 0.5) + radiusCalc;

        if (posX + (radiusCalc / 2) < cvsWidth && posY + (radiusCalc / 2) < cvsHeight) {
          this.dots.push({
            x: posX,
            y: posY,
            r: Math.floor(radiusCalc / 2),
            color: this.shadeslect.selectShade()!
          });
        }
      }
    }
  }

  squareBuild(cvsWidth: number, cvsHeight: number): void {

    const xBlockCount = Math.ceil(cvsWidth / this.f);
    const yBlockCount = Math.ceil(cvsWidth / this.f);

    const xblockWidth = Math.floor(cvsWidth / xBlockCount);
    const yblockHeight = Math.floor(cvsHeight / yBlockCount);

    const notUsedX = cvsWidth - (xBlockCount * xblockWidth);
    const notUsedY = cvsHeight - (yBlockCount * yblockHeight);

    // Loop over each block and calculate its middle point
    for (let yC = 0; yC < yBlockCount; yC++) {
      for (let xC = 0; xC < xBlockCount; xC++) {

        const posY = (yblockHeight * yC) + Math.ceil(notUsedY * 0.5);
        const posX = (xblockWidth * xC) + Math.ceil(notUsedX * 0.5);

        this.squares.push({
          x: posX,
          y: posY,
          h: yblockHeight,
          w: xblockWidth
        });


      }
    }

  }

  drawCanvas(props: IAppConfig) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { appconfig } = props;

    useEffect(() => {
      const canvas = canvasRef.current!;
      this.cvsWidthT = canvas.width;
      this.cvsHeightT = canvas.height;

      const canvasCtx = canvas.getContext('2d')!;


      switch (props.appconfig.shapeSelect?.value.value) {
        case 'square':
          this.squareBuild(canvas.width, canvas.height);
          this.squares.map(sq => {
            canvasCtx.beginPath();
            canvasCtx.rect(sq.x, sq.y, sq.w, sq.h);
            canvasCtx.fillStyle = this.shadeslect.selectShade()!;
            canvasCtx.fill();
          });
          break;
        case 'circle':
          this.circleBuild(canvas.width, canvas.height);
          // const iId = setInterval(() => {

          // }, appconfig.dotConfig!.value)
          this.dots.map(d => {
            canvasCtx.beginPath();
            canvasCtx.arc(d.x!, d.y!, d.r, 0, Math.PI * 2);
            canvasCtx.fillStyle = this.shadeslect.selectShade()!; //Green: `hsl(117, 95%, 55%)`
            canvasCtx.fill();
          });
          break;
      }

      canvasCtx.stroke();

      // console.table(this.dots);

      // setTimeout(() => {
      //   clearInterval(iId);
      //   // eslint-disable-next-line no-debugger
      //   debugger;
      // }, 5000);
      // }, appconfig.dotConfig!.value / 3);


    }, []);

    // /<canvas ref={canvasRef} {...props} />
    return (<div className="drawing-area text">
      <canvas
        ref={canvasRef}
        width={appconfig.canvasConfig!.width}
        height={appconfig.canvasConfig!.height}
      />
    </div>)
  }
}

const GreenDots: React.FC<IAppConfig> = ({ appconfig }) => {

  const canvas2 = new MyCanvas2();
  const DrawCanvas2 = canvas2.drawCanvas.bind(canvas2);

  return (
    <div id="drawing-area">
      <h2 className="text">SharePoint APP Random Colour/Shade Selector</h2>
      <div id="info-area">
        <label htmlFor="show-width">Width:</label>
        <div id="show-width" className='text'>{appconfig.canvasConfig?.width}</div>
        <label htmlFor="show-width">Height:</label>
        <div id="show-height" className='text'>{appconfig.canvasConfig?.height}</div>
        <label htmlFor="show-shape">Shape:</label>
        <div id="show-shape" className='text'>{appconfig.shapeSelect?.value.label}</div>
      </div>
      <DrawCanvas2 appconfig={appconfig} />
    </div>
  );
};

export default GreenDots;