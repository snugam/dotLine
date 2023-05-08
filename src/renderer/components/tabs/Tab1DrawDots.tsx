// // Tab1Content.tsx

// import { DotsDrawProps } from '@src/api/types';
// import React, { useEffect, useRef } from 'react';

// interface GreenDotsProps {
//   FlickerRate: number
// }

// // Returns a randomly selected shade of red using the HSL method
// // function getRandomRedShade(): string {
// //   const hue = Math.floor(Math.random() * 360); // Random hue value between 0 and 359
// //   const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation value between 50 and 100
// //   const lightness = Math.floor(Math.random() * 21) + 40; // Random lightness value between 40 and 60
// //   return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// // }

// // // Returns a randomly selected shade of yellow using the HSL method
// // function getRandomYellowShade(): string {
// //   const hue = Math.floor(Math.random() * 41) + 50; // Random hue value between 50 and 90
// //   const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation value between 50 and 100
// //   const lightness = Math.floor(Math.random() * 21) + 40; // Random lightness value between 40 and 60
// //   return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// // }

// // Returns a randomly selected shade of green using the HSL method
// function getRandomColor(): Color {
//   const values = Object.values(Color);
//   const randomIndex = Math.floor(Math.random() * values.length);
//   return values[randomIndex] as Color;
// }

// enum Color {
//   Cyan = "Cyan",
//   Magenta = "Magenta",
//   Yellow = "Yellow",
//   Green = "Green"
// }

// class selectShadeFrom {
//   selectShade() {

//     const values = Object.values(Color);
//     const randomIndex = Math.floor(Math.random() * values.length);

//     switch (values[randomIndex]) {
//       case 'Cyan':
//         return this.getRandomCyanShade();
//       case 'Green':
//         return this.getRandomGreenShade();
//       case 'Magenta':
//         return this.getRandomMagentaShade();
//       case 'Yellow':
//         return this.getRandomCyanShade();
//     }
//   }
//   private getRandomGreenShade(): string {
//     const hue = Math.floor(Math.random() * 41) + 100; // Random hue value between 100 and 140
//     const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation value between 50 and 100
//     const lightness = Math.floor(Math.random() * 21) + 40; // Random lightness value between 40 and 60
//     return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
//   }
//   private getRandomCyanShade(): string {
//     const hue = Math.floor(Math.random() * 41) + 160; // Random hue value between 160 and 200
//     const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation value between 50 and 100
//     const lightness = Math.floor(Math.random() * 21) + 40; // Random lightness value between 40 and 60
//     return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
//   }
//   private getRandomBlueShade(): string {
//     const hue = Math.floor(Math.random() * 41) + 220; // Random hue value between 220 and 260
//     const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation value between 50 and 100
//     const lightness = Math.floor(Math.random() * 21) + 40; // Random lightness value between 40 and 60
//     return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
//   }
//   private getRandomMagentaShade(): string {
//     const hue = Math.floor(Math.random() * 41) + 280; // Random hue value between 280 and 320
//     const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation value between 50 and 100
//     const lightness = Math.floor(Math.random() * 21) + 40; // Random lightness value between 40 and 60
//     return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
//   }
// }

// class MyCanvas2 {
//   constructor(private intervalDuration: number) {
//   }
//   drawCanvas(props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) {
//     const canvasRef = useRef<HTMLCanvasElement>(null);

//     useEffect(() => {

//       const canvas = canvasRef.current!;
//       const canvasCtx = canvas.getContext('2d');

//       if (canvasCtx !== null) {

//         canvasCtx.beginPath();
//         canvasCtx.arc(35, 35, 10, 0, Math.PI * 2);

//         const sShade = new selectShadeFrom();

//         setInterval(() => {
//           canvasCtx.fillStyle = sShade.selectShade() as string;
//           canvasCtx.fill();
//         }, this.intervalDuration);
//       }

//     });

//     return <canvas ref={canvasRef} {...props} />
//   }
// }


// // const MyCanvas = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {

// //   const canvasRef = useRef<HTMLCanvasElement>(null);

// //   useEffect(() => {

// //     const canvas = canvasRef.current!;
// //     const canvasCtx = canvas.getContext('2d');

// //     if (canvasCtx !== null) {

// //       canvasCtx.beginPath();
// //       canvasCtx.arc(35, 35, 10, 0, Math.PI * 2);

// //       const sShade = new selectShadeFrom();


// //       setInterval(function () {
// //         canvasCtx.fillStyle = sShade.selectShade() as string;
// //         canvasCtx.fill();
// //       }, 350);

// //     }

// //   });

// //   return <canvas ref={canvasRef} {...props} />
// // }

// const GreenDots: React.FC<DotsDrawProps> = ({ tickRate }) => {

//   const canvas2 = new MyCanvas2(tickRate);
//   const DrawCanvas2 = canvas2.drawCanvas.bind(canvas2);

//   return (
//     <div id="drawing-area">
//       <h2>Green Dots</h2>
//       <DrawCanvas2 />
//     </div>
//   );
// };

// export default GreenDots;