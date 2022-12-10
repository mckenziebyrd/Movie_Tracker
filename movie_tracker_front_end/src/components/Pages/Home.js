import React  from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import './Pages.css'


function Home() {
  const [MovieLibrary, setMovieLibrary] = useState([]);
  
  useEffect(() => {
    fetch(
      'https://localhost:7058/api/Movie',
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
        setMovieLibrary(r);
      });
  }, []);

 console.log(MovieLibrary)

  return (
   <>
   <h1>MOVIE LIBRARY HOME</h1>
    <div className='movie-app'>
        
       
            {MovieLibrary.map((movie) =>{
              return (
                <div className='movie-container'>
                    <img src={movie.poster} alt='movie poster'></img>
                </div>
              )
            })}
       
      
       
    
      
    </div>
    </>
  )
}

export default Home