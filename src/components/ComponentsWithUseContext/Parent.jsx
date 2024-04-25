import { useState, createContext } from 'react';
import Child1 from './Children/Child1';


//! EXPORT THIS CONTEXT -             could pass in a default value here
export const CountContext = createContext();
//                ^
//                |
//      this will be used as a Component

const Parent = () => {
    const [count, setCount] = useState(0);
    return (
        //                   must be called 'value'
        //                      |
        //                      V
        <CountContext.Provider value={{ count, setCount }}>
            <fieldset>
                <Child1 />
                <h1>count: {count}</h1>
                <button onClick={() => setCount(prev => prev + 1)}>add</button>
            </fieldset>
        </CountContext.Provider>
    );
};

export default Parent;
