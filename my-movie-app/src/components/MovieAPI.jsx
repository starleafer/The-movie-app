import React, {useState, useEffect} from 'react'
import Form from './Form'
import MovieList from './MovieList'


const MovieAPI = () => {
  const [state, setState] = useState("Batman")
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState([])
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://www.omdbapi.com/?apikey=bb83bad4&s=' + state);  
        const movies = await response.json();
        setMovies(movies)  
        // console.log(movies.Search[0].Type) // Hitta specifik 'Type'
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

  // && är viktigt för att state ska renderas när den uppdateras
  const filterMovies = movies.Search && movies.Search.filter((movie) =>{
    if (selectedType === 'all') {
      return true;
    } else {
      return movie.Type === selectedType;
    }
  });
  
  const handleChange = (e) => {
      setState (e.target.value)
    }


return (  
  <>   
    <Form 
      state={state}
      selectedType={selectedType}
      setSelectedType={setSelectedType}
      onChange={handleChange}
      errorMessage={errorMessage}
    />
    {movies.Search 
        ? <MovieList filterMovies={filterMovies} /> 
        : null}
  </>
 )
}

export default MovieAPI