import React, { useState, useEffect } from 'react'
import Movie from './Movie'

function MovieLibrary({movies}) {
    return (
    <div>
       {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
    </div>
  )
}

export default MovieLibrary