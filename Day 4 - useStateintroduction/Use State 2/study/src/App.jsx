import { useState } from "react";


const App = () => {
  const [movie,setMovie] = useState({
    title : "Interstellar",
    rating: 8,
  });

  const incrementRating = () => setMovie({...movie,rating:movie.rating+1});
  const decrementRating = () => setMovie({...movie,rating:movie.rating-1});

  return(
    <div>
      <h1>{movie.title}</h1>
      <p>Rating: {movie.rating}</p>
      <button onClick={incrementRating}>Increase Rating</button>
      <button onClick={decrementRating}>Decrement Rating</button>

    </div>
  )
}
export default App;