import React from 'react'
import MovieList from '../MovieList'
import SearchBox from '../SearchBox'
import './Pages.css'

function Search({movies, searchValue, setSearchValue, AddMovieToLibrary}) {
  
  return (
    <div className='movie-app'>
    <h1>SEARCH</h1>
    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    <div className='row'>
       <MovieList movies={movies} handleAddToLibraryClick={AddMovieToLibrary}/>  
    </div>
   
</div>
  )
}

export default Search