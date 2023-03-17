import React, {useState} from 'react'
import Movie from './Movie'
import myStyle from './myStyle.module.css'


//  {Title: , Year: , imdbID: , Type: , Poster: '}

const MovieList = ({movies}) => {
  const movieList = movies.Search.map(movie => (
    <li key={movie.imdbID} >
      <section className={myStyle.movieCard}>
      <h3 className={myStyle.movieTitle}>{movie.Title}</h3>
      <p className={myStyle.movieTitle}>{movie.Year} {movie.Type}</p>
      <img src={movie.Poster} className={myStyle.poster}alt="" />
      
      </section>
    </li>
));
  
  
  return (
    <>
      <ul className={myStyle.movielist}>{movieList}</ul>
      <Movie />
    </>
    
  )
}

export default MovieList