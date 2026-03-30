import { useEffect, useState } from "react";

function CounterEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      document.title = `count = ${count}`;
      console.log(`count = ${count}`);
    }
  }, [count]);
  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default CounterEffect;
