import React from 'react'
import Form from './Form'
import MovieList from './MovieList'

const MovieAPI = () => {
  return (
    <div>
      <input type="text" />
        <select class="">
            <option value="all">All</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="game">Game</option>
        </select>
    <MovieList />
    <Form />
    </div>
  )
}

export default MovieAPI