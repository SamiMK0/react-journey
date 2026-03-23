import { useState } from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";


export default function App(){
  const [count,setCount] = useState(0);

  return(
    <div>
      <ComponentOne count = {count} onClickHandler = {() => setCount(count+1)} />
      <ComponentTwo count = {count} onClickHandler = {() => setCount(count+1)} />
    </div>
  )
}