


// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IDotConfig {
    value: number;
    increment: (eventMouse: React.MouseEvent<HTMLButtonElement>) => void;
    decrement: (eventMouse: React.MouseEvent<HTMLButtonElement>) => void;
}
interface IPropHandler<T> {
    fieldname: string,
    propname: string,
    value: T,
    increment: (eventMouse: React.MouseEvent<HTMLButtonElement>) => void;
    decrement: (eventMouse: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ICanvasConfig extends JSX.IntrinsicAttributes, React.ClassAttributes<HTMLCanvasElement>, React.CanvasHTMLAttributes<HTMLCanvasElement> {
    canvasWidthConfig: IPropHandler<number>,
    canvasHeightConfig: IPropHandler<number>
}
interface IGFHYConfig {
    dotConfig?: IPropHandler<number>,
    canvasConfig?: ICanvasConfig,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IAppConfig {
    appconfig: IGFHYConfig
}
