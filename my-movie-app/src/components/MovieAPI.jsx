import React, {useState, useEffect} from 'react'
import Form from './Form'
import MovieList from './MovieList'


const MovieAPI = () => {
  const [state, setState] = useState("Batman")
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  // const [movies2, setMovies2] = useState([]);
  // const [movies3, setMovies3] = useState([]);
  // const [type, setType] = useState([])
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://www.omdbapi.com/?apikey=bb83bad4&s=' + state + '&page=' + page);  
        const movies = await response.json();
        setMovies(movies) 
        
        console.log(movies.Search)
        console.log(movies.totalResults)

        
        // const response2 = await fetch('http://www.omdbapi.com/?apikey=bb83bad4&s=' + state + '&page=2');  
        // const movies2 = await response2.json();
        // setMovies2(movies2)  
        
        // const response3 = await fetch('http://www.omdbapi.com/?apikey=bb83bad4&s=' + state + '&page=3');  
        // const movies3 = await response3.json();
        // setMovies3(movies3)  
        
        // const allResults = [...movies.Search, ...movies2.Search, ...movies3.Search]
        // const titles = allResults.map(movie => movie.Title);
        // const year = allResults.map(movie => movie.Year);
        // const imdbID = allResults.map(movie => movie.imdbID);
        // const type = allResults.map(movie => movie.Type);
        // const poster = allResults.map(movie => movie.Poster);
        
        // console.log(allResults)
        
        // console.log(movies.Search[0].Type) // Hitta specifik 'Type'
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
    
  }, [state, page])
  
  const totalResults = movies.totalResults;

  const filterMovies = movies.Search && movies.Search.filter((movie) =>{
    if (selectedType === 'all') {
      return true;
    } else {
      return movie.Type === selectedType;
    }
  
  });
  // && är viktigt för att state ska renderas när den uppdateras
  
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

  const handlePrevPageEnabled = (page !== 1)



console.log(page)

  
  
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
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      handlePrevPageEnabled={handlePrevPageEnabled}
      totalResults={totalResults}
    />
    {movies.Search 
        ? <MovieList filterMovies={filterMovies} /> 
        : null}
  </>
 )
}

export default MovieAPI