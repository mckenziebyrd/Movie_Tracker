import React from 'react'
import MovieList from '../MovieList'
import "bootstrap/dist/css/bootstrap.min.css"
import MovieListHeading from '../MovieListHeading'
import SearchBox from '../SearchBox'

function Home({movies, searchValue, setSearchValue}) {

  return (
    <div className='container-fluid'>
        <div className='row' >
            <MovieListHeading heading='MOVIE LIBRARY HOME'/>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className='row'>
           <MovieList movies={movies}/>  
        </div>
       
    </div>
  )
}

export default Home