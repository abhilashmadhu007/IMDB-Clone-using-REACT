import React from 'react'
import MovieCard from './MovieCard'

function Movie() {
  return (
    <div>
      <div className='text-xl font-bold text-center'>
        Trendiing Movies
      </div>
      <div className='p-3 flex flex-row justify-around flex-wrap'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  )
}

export default Movie
