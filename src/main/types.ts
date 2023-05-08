
interface canHaveRate {
    currentrate: number;

}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ColorChangeRateProps extends canHaveRate {
    increment: (eventMouse: React.MouseEvent<HTMLButtonElement>) => void;
    decrement: (eventMouse: React.MouseEvent<HTMLButtonElement>) => void;
}