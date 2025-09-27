import React from "react";

function MovieCard({ poster_path , name}) {  
  
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end m-2"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="text-white text-xl w-full p-2  text-center">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
