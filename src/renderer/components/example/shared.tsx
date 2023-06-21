// import React from 'react';

// interface MyContextType {
//     defaultValue: string;
//     setValue: (newValue: string) => void;
// }

// const MyContext = React.createContext<MyContextType>({
//     defaultValue: 'default value',
//     // eslint-disable-next-line @typescript-eslint/no-empty-function
//     setValue: () => { }
// });
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const MyProvider: React.FC<any> = ({ children }) => {
//     const [myValue, setMyValue] = React.useState('initial value');

//     const handleSetValue = (newValue: string) => {
//         setMyValue(newValue);
//     }

//     return (
//         <MyContext.Provider value={{ defaultValue: myValue, setValue: handleSetValue }}>
//             {children}
//         </MyContext.Provider>
//     );
// };

// const MyComponent: React.FC = () => {
//     const { defaultValue, setValue } = React.useContext<MyContextType>(MyContext);

//     return (
//         <div>
//             <p>My value is: {defaultValue}</p>
//             <button onClick={() => setValue('new value')}>
//                 Set new value
//             </button>
//         </div>
//     );
// };

// export MyProvider

// export default MyProvider;
