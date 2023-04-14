export interface coords {
    x: number;
    y: number;
    f: string;
}

export class dot {
    private xcoord = 0;
    private ycoord = 0;
    private radius = 0;
    private canvasWidth = 0;
    private canvasHeight = 0;
    private canvas!: HTMLCanvasElement;
    private canvasCtx!: CanvasRenderingContext2D;
    private coords: Array<coords>;
    constructor(canvas: HTMLCanvasElement, width: number, height: number) {
        this.coords = new Array<coords>();
        this.xcoord = 0;
        this.canvasWidth = width;
        this.canvasHeight = height;
        // this.canvas = document.createElement("canvas");
        // parent.appendChild(this.canvas);

        this.canvasCtx = canvas.getContext('2d')!;
        this.canvasClear();
    }
    private canvasClear() {
        this.canvasCtx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
    private getRandomGreenColor(): string {
        const hue = Math.floor(Math.random() * 60) + 80; // Select a hue between 80 and 140
        const saturation = Math.floor(Math.random() * 41) + 60; // Select a saturation between 60 and 100
        const lightness = Math.floor(Math.random() * 41) + 30; // Select a lightness between 30 and 70
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }
    private dotInit(r: number, x: number, y: number) {
        this.xcoord = x;
        this.ycoord = y;
        this.radius = r;
        console.log(`x:${this.xcoord} y:${this.ycoord} r:${this.radius}`);
        this.canvasClear();
        this.dotDraw(false);
    }
    private dotDraw(clearCanvas: boolean) {

        const dotAngleStart = 0;
        const dotAngleEnd = Math.PI * 2;
        const anticlockwise = false;

        if (clearCanvas) this.canvasClear();

        this.canvasCtx.beginPath();
        this.canvasCtx.arc(this.xcoord, this.ycoord, this.radius, dotAngleStart, dotAngleEnd, anticlockwise);
        this.canvasCtx.fillStyle = this.getRandomGreenColor();
        this.canvasCtx.fill();

        // this.$$(`#coord-x`).html(String(this.xcoord));
        // this.$$(`#coord-y`).html(String(this.ycoord));

        this.coords.push({
            'x': this.xcoord,
            'y': this.ycoord,
            'f': this.canvasCtx.fillStyle
        });

    }
    private dotMoveXBy(value: number) {
        this.xcoord = this.xcoord + value;
    }
    private dotMoveYBy(value: number) {
        this.ycoord = this.ycoord + value;
    }
    seqBlobs() {
        const dotRadius = 5;

        this.dotInit(dotRadius, dotRadius * 2, dotRadius * 2);

        while (this.ycoord < this.canvasHeight) {

            while (this.xcoord < this.canvasWidth) {
                this.dotMoveXBy(25);
                this.dotDraw(false);
            }

            this.dotMoveYBy(25);
            this.xcoord = dotRadius * 2;
            this.dotDraw(false);

        }

        console.dir(this.coords);

    }
}