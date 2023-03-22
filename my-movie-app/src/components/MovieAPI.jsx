import React, {useState, useEffect} from 'react'
import Form from './Form'
import MovieList from './MovieList'

const MovieAPI = () => {
  const [state, setState] = useState("Batman")
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://www.omdbapi.com/?apikey=bb83bad4&s=' + state + '&type=' + selectedType +'&page=' + page);  
        const movies = await response.json();
        setMovies(movies) 
        
        let errorMessage = "";
        if (movies.Error === "Too many results.") {
          errorMessage = "Too many results.";
        } 
        else if (movies.Error === "Movie not found!") {
          errorMessage = "Movie not found!";
        }
        else if (movies.Error === "Incorrect IMDb ID.") {
          errorMessage = "Incorrect IMDb ID!";
        } 
        setErrorMessage(errorMessage);
      } 
      catch(error) { console.log(error) }
    };
    state !== '' ? fetchMovies() : setMovies([]);
  }, [state, page, selectedType])
  
  const totalResults = movies.totalResults;
  
  const filterMovies = movies.Search && movies.Search.filter((movie) =>{
    if (selectedType === "") {
      return true
    } else {
      return movie.Type === selectedType;
    }
});

  const handleChange = (e) => {
    setState (e.target.value)
  }

  const handleNextPage = (e) => {
    e.preventDefault()
      setPage(page + 1); 
  }

  const handlePrevPage = (e) => {
    e.preventDefault()
    setPage(page - 1);
  }

  //Need to add function to make 'Next page'-button unclickable if there are no more pages

  const handlePrevPageEnabled = (page !== 1)

  return (  
    <>   
    <Form 
      state={state}
      selectedType={selectedType}
      setSelectedType={setSelectedType}
      onChange={handleChange}
      errorMessage={errorMessage}
      movies={movies}
      page={page}
      filterMovies={filterMovies}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      handlePrevPageEnabled={handlePrevPageEnabled}
      totalResults={totalResults}
    />
    {filterMovies 
        ? <MovieList filterMovies={filterMovies} /> 
        : null}
  </>
 )
}

export default MovieAPI