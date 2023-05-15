// import type { ActionMeta } from 'react-select';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IDotConfig {
    value: number;
    increment: (eventMouse: React.MouseEvent<HTMLButtonElement>) => void;
    decrement: (eventMouse: React.MouseEvent<HTMLButtonElement>) => void;
}
interface IFieldProp {
    fieldname: string,
    propname: string,
}
interface ICounterHandler<T> extends IFieldProp {
    value: T,
    increment: (eventMouse: React.MouseEvent<HTMLButtonElement>) => void;
    decrement: (eventMouse: React.MouseEvent<HTMLButtonElement>) => void;
}
interface ISelectHandlerOption {
    label: string,
    value: string
}
interface ISelectHandler extends IFieldProp {
    options: Array<ISelectHandlerOption>;
    value: ISelectHandlerOption;
    onchange: (ev: React.ChangeEvent<HTMLSelectElement>) => void
}
interface ICanvasConfig extends JSX.IntrinsicAttributes, React.ClassAttributes<HTMLCanvasElement>, React.CanvasHTMLAttributes<HTMLCanvasElement> {
    canvasWidthConfig: ICounterHandler<number>,
    canvasHeightConfig: ICounterHandler<number>
}
interface IGFHYConfig {
    dotConfig?: ICounterHandler<number>,
    canvasConfig?: ICanvasConfig,
    shapeSelect?: ISelectHandler,
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IAppConfig {
    appconfig: IGFHYConfig
}