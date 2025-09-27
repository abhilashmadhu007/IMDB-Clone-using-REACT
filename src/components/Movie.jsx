import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'

function Movie() {
     const [Movies , setMovies] = useState([])
     useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b4ffaae9e110930fad67bcb67972ac26&language=en-US&page=1').then(function(res){
      setMovies(res.data.results)
    })

   },[])
  return (
    <div>
      <div className='text-xl font-bold text-center'>
        Trending Movies
      </div>
      <div className='p-3 flex flex-row justify-around flex-wrap'>
        {Movies.map((movieObj)=>{
          return(
          <MovieCard key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title}/>
          )
        })}
   
      </div>
    </div>
  )
}

export default Movie
