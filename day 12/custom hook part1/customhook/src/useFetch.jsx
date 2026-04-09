import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data,setData] = useState([]);
    useEffect(() => {
    // first way
    // async function getData() {
    //   const responce = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos",
    //   );
    //   const data = await responce.json();
    //   setData(data);
    // }
    // getData();

    // second way
    fetch(url)
      .then((res)=>res.json())
      .then((data)=>setData(data));

  }, [url]);

  return[data]

}
export default useFetch;