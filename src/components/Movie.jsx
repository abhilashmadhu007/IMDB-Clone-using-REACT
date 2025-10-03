import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movie({ handleAddtoWatchlist,handleRemoveFromWatchList,watchlist }) {
  const [Movies, setMovies] = useState([]);
  let [pageNo,setPageNo] = useState(1);

  const handlePrev = ()=>{
    if(pageNo==1){
    setPageNo=1
    }
    else{
      setPageNo(pageNo-1)
    }
    
  }

  const handleNext = ()=>{
    setPageNo(pageNo+1)
  }


  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=b4ffaae9e110930fad67bcb67972ac26&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);
  return (
    <div>
      <div className="text-xl font-bold text-center">Trending Movies</div>
      <div className="p-3 flex flex-row justify-around flex-wrap">
        {Movies.map((movieObj) => {
          return (
            <MovieCard
            watchlist={watchlist}
            movieObj={movieObj}
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddtoWatchlist={handleAddtoWatchlist}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
            />
          );
        })}
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  );
}

export default Movie;
