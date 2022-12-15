import React, { useState } from "react";
import "./MovieList.css";
import { Navigate } from "react-router-dom";

function MovieList(props) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [watched, setWatched] = useState("");
  const [favorite, setFavorites] = useState("");
  const [poster, setPoster] = useState("");
  const comments = []

  const AddToLibary = (movie) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "https://localhost:7058",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    };
    return fetch("https://localhost:7058/api/Movie", fetchOptions);
  };

  const submit = (movie) => {
    console.log(movie)
    const newMovie = {
      userId: 1,
      title: movie.Title,
      year: movie.Year,
      watched: false,
      favorite: false,
      poster: movie.Poster,
      comments: "",
    };
  
         AddToLibary(newMovie);
    
 
  };

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container">
          <img src={movie.Poster} key={movie}></img>
          <div className="overlay">
            <button onClick={() => submit(movie)}>ADD TO LIBRARY</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
