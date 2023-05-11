import React, { useEffect, useRef } from 'react';

import './drawdots.scss';
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

class MyCanvas2 {

  flashCount = 0;
  x = 0;
  y = 0;
  r = 7;
  f = 0;
  dots: Array<dotInfo>;
  shadeslect: selectShadeFrom;
  cvsWidthT = 0;
  cvsHeightT = 0;
  constructor() {
    this.shadeslect = new selectShadeFrom;
    this.dots = new Array<dotInfo>();
    this.y = (this.r * 2);
    this.x = (this.r * 2);
  }

  dotCoord(cvsWidth: number): boolean {

    if (this.cvsHeightT > 0) {

      this.cvsWidthT = (this.cvsWidthT - ((this.r * 2) + this.f));

      if (this.cvsWidthT < 0) {
        this.cvsWidthT = cvsWidth;
        this.x = (this.r * 2);
        this.y += this.f + (this.r * 2);
        this.cvsHeightT = (this.cvsHeightT - ((this.r * 2) + this.f));
      } else {

        this.dots.push({
          x: this.x,
          y: this.y,
          r: this.r,
          color: this.shadeslect.selectShade()!
        });

        this.x += (this.f + (this.r * 2))
      }
    }

    // return this.maxDots--;
    return this.cvsHeightT > 0;

  }

  drawCanvas(props: IAppConfig) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { appconfig } = props;

    useEffect(() => {
      const canvas = canvasRef.current!;
      this.cvsWidthT = canvas.width;
      this.cvsHeightT = canvas.height;

      const canvasCtx = canvas.getContext('2d')!;
      // this.maxDots = (this.cols * this.rows) - cols;

      while (this.dotCoord(canvas.width)) {
        console.log(`ROW`);
      }


      // const iId = setInterval(() => {

      // }, appconfig.dotConfig!.value)
      this.dots.map(d => {
        canvasCtx.beginPath();
        canvasCtx.arc(d.x!, d.y!, d.r, 0, Math.PI * 2);
        canvasCtx.fillStyle = this.shadeslect.selectShade()!; //Green: `hsl(117, 95%, 55%)`
        canvasCtx.fill();
      });

      console.table(this.dots);

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
      <h2>Green Dots</h2>
      <DrawCanvas2 appconfig={appconfig} />
    </div>
  );
};

export default GreenDots;