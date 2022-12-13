import React  from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import './Pages.css'


function Favorites() {
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    fetch(
      'https://localhost:7058/api/Movie/favorite',
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'https://localhost:7058',
          'Content-Type': 'application/json',
        },
      },
    )
      .then((res) => res.json())
      .then((r) => {
        setFavorites(r);
      });
  }, []);



  return (
   <>
   <h1>FAVORITES</h1>
    <div className='movie-app'>
        
       
            {favorites.map((movie) =>{
              return (
                <div className='movie-container'>
                    <img src={movie.poster} alt='movie poster'></img>
                    <h2>TITLE : {movie.title}</h2>
                    <h3>YEAR : {movie.year}</h3>
                    <p>COMMENTS : {movie.comments}</p>
                   <p>{movie.watched == 1 ? "WATCHED" : "NOT WATCHED YET"}</p>
                    <p>{movie.favorite == 1 ? "FAVORITE" : ""}</p>
                </div>
              )
            })}
       
      
       
    
      
    </div>
    </>
  )
}

export default Favorites