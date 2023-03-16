import React, {useState, useEffect} from 'react'
import Form from './Form'
import MovieList from './MovieList'

const MovieAPI = () => {

  const [state, setState] = useState("")
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
    

  useEffect(() => {
    const fetchMovies = async () => {
        try {
            const response = await fetch('http://www.omdbapi.com/?apikey=bb83bad4&s=' + state);  
            const movies = await response.json();
            console.log(movies);  
            console.log(movies.Response);  
            console.log(state)    
             
            let errorMessage = "";
            if (movies.Error === "Too many results.") {
                errorMessage = "Too many results! :O";
            } else if (movies.Error === "Movie not found!") {
                errorMessage = "Movie not found :(";
            }
            setErrorMessage(errorMessage);
            
        }  catch(error) 
        { console.log(error) }
    };
    
    state !== '' ? fetchMovies() : setMovies ([]);

  }, [state])


        

    const handleChange = (e) => {
        setState (e.target.value)
      }

    
  return (
    
    <>
    <form action="" >
      <input type="text" value={state} onChange={handleChange}/>
      <select className="">
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="game">Game</option>
      </select>
      <p>{errorMessage}</p>     
    </form>
   

    <MovieList movies={movies}/>
    <Form />
    </>
  )
}

export default MovieAPI