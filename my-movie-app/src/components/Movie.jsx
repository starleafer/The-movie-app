import React from 'react'
import myStyle from './myStyle.module.css'


const Movie = ({filterMovies}) => {
  const theMovies = filterMovies.filter((movie) => movie).map((movie) => (
    <section  key={movie.imdbID} className={myStyle.movieCard}>
      <h3 className={myStyle.movieTitle}>{movie.Title.length > 26 ? `${movie.Title.substring(0, 22)}...` : movie.Title}</h3>
        <p id={myStyle.yearType} className={myStyle.movieTitle}>{movie.Year} / {movie.Type}</p>
      <img src={movie.Poster} className={myStyle.poster} alt="" />
    </section>
))
  return (
    <>
      {theMovies}
    </>
  )
}

export default Movie