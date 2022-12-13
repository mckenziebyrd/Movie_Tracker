import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import './Pages.css'

function NeedToWatch() {
  const [unwatched, setUnWatched] = useState([]);
  
  useEffect(() => {
    fetch(
      'https://localhost:7058/api/Movie/unwatched',
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
        setUnWatched(r);
      });
  }, []);


  return (
    <>
    <h1>Want to Watch Movies</h1>
     <div className='movie-app'>
         
        
             {unwatched.map((movie) =>{
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
     </>  )
}

export default NeedToWatch