import React ,{useState}from 'react'
import './MovieList.css'
import {AiFillHeart} from 'react-icons/ai'

function MovieList(props) {
 
  return (
    <>
        {props.movies.map((movie, index)=> (
        <div className='image-container'>
            <img src={movie.Poster} key={movie}></img>
            <div 
            className='overlay'
           >
                <p>Add to Favorites</p>
                <AiFillHeart />
            </div>
        </div>
        ))}
    
    </>
  )
}

export default MovieList