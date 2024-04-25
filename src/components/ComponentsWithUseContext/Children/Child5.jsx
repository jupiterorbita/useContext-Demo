import { useContext } from "react";
import { CountContext } from "../Parent";

const Child5 = () => {
    const { count } = useContext(CountContext);
    const { setCount } = useContext(CountContext);
    // console.log(alterCount);
    return (
        <div className='child-box-5'>Child5
            <h3>count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>add</button>
        </div>
    );
};

export default Child5;