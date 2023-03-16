import React from 'react'
import Movie from './Movie'

const MovieList = (movies) => {
  return (
    <>
      <ul>
        {/* <li>
            <h3>{movies.title}</h3>
            <p>{MovieList.Type}</p>
            <p>{MovieList.Year}</p>
            <section>{MovieList.Poster}</section>
        </li> */}
      </ul>
      <Movie />
    </>
    
  )
}

export default MovieList