import Child2 from "./Child2";
import { useContext } from "react";
import { CountContext } from "../Parent";

const Child1 = () => {
  const { count } = useContext(CountContext);
  return (
    <div className="child-box-1">Child1
      <Child2 />
      <h2>Count: {count}</h2>
    </div>
  );
};

export default Child1;