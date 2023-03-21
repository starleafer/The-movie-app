import React, {useState} from 'react'
import Movie from './Movie'
import myStyle from './myStyle.module.css'

const MovieList = ({ filterMovies }) => {
  

  return (
    <ul>
      <li key={filterMovies.imdbID} className={myStyle.movielist}>
        <Movie filterMovies={filterMovies} />
      </li>
    </ul>
  )
}

export default MovieList