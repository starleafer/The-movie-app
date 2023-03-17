import React, {useState, useEffect} from 'react'
import Form from './Form'
import MovieList from './MovieList'
import myStyle from './myStyle.module.css'



const MovieAPI = () => {

  const [state, setState] = useState("Batman")
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
    

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://www.omdbapi.com/?apikey=bb83bad4&s=' + state);  
        const movies = await response.json();
        // console.log(state)
        setMovies(movies)  
        console.log(movies)
            
        let errorMessage = "";
        if (movies.Error === "Too many results.") {
            errorMessage = "Too many results.";
        } else if (movies.Error === "Movie not found!") {
            errorMessage = "Movie not found!";
        } 

        setErrorMessage(errorMessage);
      } 
      catch(error) { console.log(error) }
    };
    
    state !== '' ? fetchMovies() : setMovies([]);

  }, [state])

  const handleChange = (e) => {
      setState (e.target.value)
    }

return (  
  <>
    <form action="" className={myStyle.formSection}>
      <input type="text" value={state} className={myStyle.inputs} onChange={handleChange}/>
      <select className={myStyle.inputs}>
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="game">Game</option>
      </select>
      <p>{errorMessage}</p>     
    </form>
    {movies.Search 
        ? <MovieList  movies={movies}/> 
        : null}
    <Form />
  </>
 )
}

export default MovieAPI