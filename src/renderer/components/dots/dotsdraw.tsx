import React, { useEffect, useRef } from 'react';
import './drawdots.scss';
enum Color {
  Cyan = "Cyan",
  Magenta = "Magenta",
  Yellow = "Yellow",
  Green = "Green"
}

class selectShadeFrom {
  selectShade() {

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
    const hue = Math.floor(Math.random() * 41) + 220; // Random hue value between 220 and 260
    const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation value between 50 and 100
    const lightness = Math.floor(Math.random() * 21) + 40; // Random lightness value between 40 and 60
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  private getRandomMagentaShade(): string {
    const hue = Math.floor(Math.random() * 41) + 280; // Random hue value between 280 and 320
    const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation value between 50 and 100
    const lightness = Math.floor(Math.random() * 21) + 40; // Random lightness value between 40 and 60
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
}

class MyCanvas2 {

  drawCanvas(props: IAppConfig) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const { appconfig } = props;

    useEffect(() => {


      const canvas = canvasRef.current!;
      const canvasCtx = canvas.getContext('2d')!;

      canvasCtx.beginPath();
      canvasCtx.arc(35, 35, 10, 0, Math.PI * 2);

      const sShade = new selectShadeFrom();

      setInterval(() => {
        canvasCtx.fillStyle = sShade.selectShade() as string;
        canvasCtx.fill();
      }, appconfig.dotConfig!.value);

    });

    console.dir(props);
    // /<canvas ref={canvasRef} {...props} />
    return (<div className="drawing-area text">
      <canvas ref={canvasRef} width={appconfig.canvasConfig!.width} height={appconfig.canvasConfig!.height} />
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