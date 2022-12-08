import React ,{useState}from 'react'
import './MovieList.css'
import {AiFillHeart} from 'react-icons/ai'

function MovieList(props) {
   const favoriteComponent = props.favoriteComponent
  return (
    <>
        {props.movies.map((movie, index)=> (
        <div className='image-container'>
            <img src={movie.Poster} key={movie}></img>
            <div className='overlay'>
                <span>Add to Favorites</span>
                <AiFillHeart />
            </div>
        </div>
        ))}
    
    </>
  )
}

export default MovieList