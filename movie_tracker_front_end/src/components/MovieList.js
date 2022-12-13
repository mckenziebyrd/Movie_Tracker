import React ,{useState}from 'react'
import './MovieList.css'

function MovieList(props) {


  return (
    <>
        {props.movies.map((movie, index)=> (
        <div className='image-container'>
            <img src={movie.Poster} key={movie}></img>
            <div 
           
            className='overlay'
            
           >
                <button>Add to Library</button>
                
            </div>
        </div>
        ))}
    
    </>
  )
}

export default MovieList