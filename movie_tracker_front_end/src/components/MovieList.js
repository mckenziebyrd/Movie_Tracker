import React ,{useState}from 'react'

function MovieList(props) {
   
  return (
    <>
        {props.movies.map((movie, index)=> (
        <div className='d-flex justify-content-start m3'>
            <img src={movie.Poster} key={movie}></img>
        </div>
        ))}
    
    </>
  )
}

export default MovieList