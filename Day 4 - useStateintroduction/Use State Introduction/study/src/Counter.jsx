import { useState } from "react";

useState
const Counter = () => {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      {/* <button onClick={() => setCount(count+1)}>Click</button> */}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
export default Counter
