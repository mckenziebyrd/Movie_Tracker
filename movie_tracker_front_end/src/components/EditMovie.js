import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useEffect} from "react";
import './EditMovie.css'

function EditMovie() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();
  const userId = 1;



  const Cancel = () => {
    navigate('/')
  }

  useEffect(() => {
    fetch(`https://localhost:7058/api/Movie/${movieId}`)
    .then(response => response.json())
    .then((data) => {
        setMovie(data)
        console.log(movie);
    })
}, [movieId])

const Delete = () => {
    fetch(`https://localhost:7058/api/Movie/deleteMovie/${movieId}/${userId}`, {
    method: "DELETE"
    })
    .then(navigate("/"))
}

const UpdateMovie = (e) => {

    e.preventDefault()
    const newMovie = {
        id: movie.id,
        userId: movie.userId,
        title: movie.title,
        year: movie.year,
        watched: movie.watched,
        favorite: movie.favorite,
        poster: movie.poster,
        comments: movie.comments 
    }
    console.log(newMovie)
    fetch(`https://localhost:7058/api/Movie/${movieId}`, {
    method: "PUT",
    headers: {
        'Access-Control-Allow-Origin': 'https://localhost:7058',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMovie)
})
    .then(() => {
        navigate(`/`)
    })
}


  return (
    <>
    <form>
        <h1>EDIT MOVIE</h1>
        <img src={movie.poster} alt='movie poster'></img>
        <h2>TITLE : {movie.title}</h2>
        <h3>YEAR : {movie.year}</h3>
      
        <fieldset>
            <div className="form-group">
                <label>COMMENTS : </label>
                <input 
                    onChange={
                       (e) => {
                        const copy = {... movie}
                        copy.comments = e.target.value
                        setMovie(copy)
                       }}
                       required autoFocus
                       type="text"
                       className="form-control"
                       value={movie.comments}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
               <label>WATCHED : 
               </label>
                <input 
                    onChange={
                        (e) => {
                            const copy = {... movie}
                            copy.watched = e.target.checked
                            setMovie(copy)
                           }}
                       required autoFocus
                       type="checkbox"
                       className="form-control"
                       checked={movie.watched}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
               <label>FAVORITE : 
               </label>
                <input 
                    onChange={
                       (e) => {
                        const copy = {... movie}
                        copy.favorite = e.target.checked
                        setMovie(copy)
                       }}
                       required autoFocus
                       type="checkbox"
                       className="form-control"
                       checked={movie.favorite}
                />
            </div>
        </fieldset>
        <section className="btn-container">
            <button className="btn" onClick={UpdateMovie}>SAVE</button>
            <button className="btn" onClick={Cancel}>CANCEL</button>
            <button className="btn" onClick={Delete}>DELETE</button>
        </section>
    </form>
    </>
  );
}
export default EditMovie;
