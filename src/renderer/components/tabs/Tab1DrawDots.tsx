// Tab1Content.tsx

import React, { useEffect, useRef } from 'react';

// Returns a randomly selected shade of red using the HSL method
// function getRandomRedShade(): string {
//   const hue = Math.floor(Math.random() * 360); // Random hue value between 0 and 359
//   const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation value between 50 and 100
//   const lightness = Math.floor(Math.random() * 21) + 40; // Random lightness value between 40 and 60
//   return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// }

// // Returns a randomly selected shade of yellow using the HSL method
// function getRandomYellowShade(): string {
//   const hue = Math.floor(Math.random() * 41) + 50; // Random hue value between 50 and 90
//   const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation value between 50 and 100
//   const lightness = Math.floor(Math.random() * 21) + 40; // Random lightness value between 40 and 60
//   return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// }

// Returns a randomly selected shade of green using the HSL method
function getRandomColor(): Color {
  const values = Object.values(Color);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex] as Color;
}

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


const MyCanvas = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    const canvas = canvasRef.current!;
    const canvasCtx = canvas.getContext('2d');

    if (canvasCtx !== null) {

      canvasCtx.beginPath();
      canvasCtx.arc(35, 35, 10, 0, Math.PI * 2);

      const sShade = new selectShadeFrom();


      setInterval(function () {
        canvasCtx.fillStyle = sShade.selectShade() as string;
        canvasCtx.fill();
      }, 350);

    }

  });

  return <canvas ref={canvasRef} {...props} />
}

const Tab1Content: React.FC = () => {

  return (
    <div id="drawing-area">
      <h2>Green Dots</h2>
      <MyCanvas />
    </div>
  );
};

export default Tab1Content;