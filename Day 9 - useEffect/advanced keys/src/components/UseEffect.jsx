import { useEffect, useState } from "react";

export default function UseEffect() {
  const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log("call useEffect");
//     document.title = `Increment ${value}`;
//   }); on every component render

    // useEffect(()=>{
    //     console.log("call useEffect");
    //     document.title = `Increment ${value}`;
    // },[]); on the first render only

    useEffect(()=>{
        if(value>0){
            // note that cant rap the hook inside a conditiongit 
            console.log("call useEffect");
            document.title = `Increment ${value}`;
        }

    },[value]);
    // render when the state changed
  
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
    </div>
  );
}
