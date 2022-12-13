import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {useEffect} from "react";

function EditMovie() {
    const [movie, setMovie] =useState({});
    const {movieId} = useParams()

useEffect(() => {
    fetch(`https://localhost:7058/api/Movie/${movieId}`)
    .then(response => response.json())
    .then((data) => {
        setMovie(data)
        console.log(movie);
    })
}, [movieId])


return (
    <div className='movie-container'>
    <h1>MOVIE DETAILS</h1>
                    <img src={movie.poster} alt='movie poster'></img>
                    <h2>TITLE : {movie.title}</h2>
                    <h3>YEAR : {movie.year}</h3>
                    <p>COMMENTS : {movie.comments}</p>
                    <p>{movie.watched == 1 ? "WATCHED" : "NOT WATCHED YET"}</p>
                    <p>{movie.favorite == 1 ? "FAVORITE" : ""}</p>
</div> )
}


export default EditMovie