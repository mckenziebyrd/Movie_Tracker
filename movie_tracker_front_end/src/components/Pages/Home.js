import React from 'react'
import MovieList from '../MovieList'
import MovieListHeading from '../MovieListHeading'
import SearchBox from '../SearchBox'
import AddFavorites from '../AddFavorites'
import './Pages.css'

function Home({movies, searchValue, setSearchValue}) {

  return (
    <div className='movie-app'>
        <MovieListHeading heading='MOVIE LIBRARY HOME'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className='row'>
           <MovieList movies={movies} favoriteComponent={AddFavorites}/>  
        </div>
       
    </div>
  )
}

export default Home