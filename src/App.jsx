import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  let [watchlist , setwatchList] = useState([])

  let handleAddtoWatchlist = (movieObj) =>{
    let newWatchList = [...watchlist,movieObj] 
    localStorage.setItem('movies',JSON.stringify(newWatchList))
    setwatchList(newWatchList)
    console.log(newWatchList)
  }

  let handleRemoveFromWatchList = (movieObj) =>{
    let filteredWatchList = watchlist.filter((movie)=>{
      return movie.id != movieObj.id
    })
        localStorage.setItem('movies',JSON.stringify(filteredWatchList))

    setwatchList(filteredWatchList)
  }

 useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem('movies');
    if (moviesFromLocalStorage) {
      setwatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []); 

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Banner/>
                <Movie watchlist={watchlist} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchList={handleRemoveFromWatchList} />
                
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setwatchList={setwatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
