import { useState } from "react"



export default function App(){
  const [movies, setMovies] = useState([
    {id:1, name:"spiderman" , rating: 7},
    {id:2, name:"superman" , rating: 6},
  ])

  const changeName = () => {
    setMovies(movies.map((m) => m.id == 1 ? {...m, name: "Spider Man"} : m));
  }
  return (
    <div>
      {
        movies.map(movie => (
          <li key={movie.id}>{movie.name}</li>
        ))
      }
      <button onClick={changeName}>Change name</button>
    </div>
  )
}