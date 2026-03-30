import { useEffect, useState } from "react"



export default function FetchData(){

    const [data,setData] = useState([]);

    useEffect(()=>{
        async function getPosts() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const posts = await response.json();
            if(posts && posts.length) setData(posts)
        }

        getPosts();
    },[])

    // const firstPost = data.find(post => post.id ==100);
    return(
        <div>
            <h1>Title of the first post: </h1>
            {/* {firstPost? <p>{firstPost.title}</p> : <p>Loading...</p>} */}
            {data.length>0?<p>{data[0].title}</p>:<p>Loadin...</p>}
        </div>
    )
}