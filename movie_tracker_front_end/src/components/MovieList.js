import React ,{useState}from 'react'
import './MovieList.css'

function MovieList(props) {
   const favoriteComponent = props.favoriteComponent
  return (
    <>
        {props.movies.map((movie, index)=> (
        <div className='image-container'>
            <img src={movie.Poster} key={movie}></img>
            <div className='overlay'>
                <favoriteComponent />
            </div>
        </div>
        ))}
    
    </>
  )
}

export default MovieList