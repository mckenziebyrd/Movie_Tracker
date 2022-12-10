import React from 'react'
import MovieList from '../MovieList'
import SearchBox from '../SearchBox'
import './Pages.css'

function Search({movies, searchValue, setSearchValue,}) {
  return (
    <div className='movie-app'>
    <h1>MOVIE LIBRARY HOME</h1>
    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    <div className='row'>
       <MovieList movies={movies} />  
    </div>
   
</div>
  )
}

export default Search