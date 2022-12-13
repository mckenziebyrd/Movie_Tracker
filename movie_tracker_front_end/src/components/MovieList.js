import React ,{useState}from 'react'
import './MovieList.css'

function MovieList(props) {
 
  return (
    <>
        {props.movies.map((movie, index)=> (
        <div 
        className='image-container'>
            <img src={movie.Poster} key={movie}></img>
            <div 
            className='overlay'
            onClick={console.log(movie)}
           >
                <p>Add to Library</p>
                
            </div>
        </div>
        ))}
    
    </>
  )
}

export default MovieList