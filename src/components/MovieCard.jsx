import React from "react";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end m-2"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          className="m-3 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
          onClick={() => handleRemoveFromWatchList(movieObj)}
        >
          &#10060;
        </div>
      ) : (
        <div
          className="m-3 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
          onClick={() => handleAddtoWatchlist(movieObj)}
        >
          &#128525;
        </div>
      )}
     
      <div className="text-white text-xl w-full p-2  text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
