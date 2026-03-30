import { useEffect, useState } from "react"


export default function FetchUseEffect(){

    const [data,setData] = useState([]);

    useEffect(()=>{
        async function getData() {
           const responce =  await fetch("https://jsonplaceholder.typicode.com/todos");
           const data = await responce.json();
           if(data && data.length) setData(data)
        }

        getData();
    },[]);
    return(
        <div>
            <ul>
                {
                    data.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}