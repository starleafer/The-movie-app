import React, {useState} from 'react'
import Movie from './Movie'
import myStyle from './myStyle.module.css'

const MovieList = ({ filterMovies }) => {
  const movieList = filterMovies.filter((movie) => movie).map((movie) => (
    <li key={movie.imdbID}>
      <section className={myStyle.movieCard}>
        <h3 className={myStyle.movieTitle}>{movie.Title.length > 26 ? `${movie.Title.substring(0, 22)}...` : movie.Title}
        </h3>
          <p id={myStyle.yearType} className={myStyle.movieTitle}>{movie.Year} / {movie.Type}</p>
        <img src={movie.Poster} className={myStyle.poster} alt="" />
      </section>
    </li>
  ))

  return (
    <>
      <ul className={myStyle.movielist}>{movieList}</ul>
      <Movie />
    </>
  )
}

export default MovieList