import React  from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Pages.css'
import { Link } from 'react-router-dom'


function Home() {
  const [MovieLibrary, setMovieLibrary] = useState([]);
  const navigate = useNavigate();
  
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

 //console.log(MovieLibrary)

  

  return (
   <>
   <h1>MOVIE LIBRARY HOME</h1>
   <button
        onClick={()=> navigate('./search')}>SEARCH</button>
    <div className='movie-app'>
        
       
            {MovieLibrary.map((movie) =>{
              return (
                <div className='movie-container'>
                    <img src={movie.poster} alt='movie poster'></img>
                    <h2>TITLE : {movie.title}</h2>
                    <h3>YEAR : {movie.year}</h3>
                    <p>COMMENTS : {movie.comments}</p>
                   <p>{movie.watched == 1 ? "WATCHED" : "NOT WATCHED YET"}</p>
                    <p>{movie.favorite == 1 ? "FAVORITE" : ""}</p>
                    <Link to={`/movie/${movie.id}`}>EDIT</Link>
                </div>
              )
            })}
       
      
       
    
      
    </div>
    </>
  )
}

export default Home