import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import './Pages.css'

function WatchList() {
  const [watched, setWatched] = useState([]);
  
  useEffect(() => {
    fetch(
      'https://localhost:7058/api/Movie/watched',
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
        setWatched(r);
      });
  }, []);


  return (
    <>
    <h1>Watched Movies</h1>
     <div className='movie-app'>
         
        
             {watched.map((movie) =>{
               return (
                 <div className='movie-container'>
                     <img src={movie.poster} alt='movie poster'></img>
                 </div>
               )
             })}
        
       
        
     
       
     </div>
     </>  )
}

export default WatchList