import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Favorites from './components/Pages/Favorites';
import Home from './components/Pages/Home';
import NeedToWatch from './components/Pages/NeedToWatch';
import WatchList from './components/Pages/WatchList';
import Search from './components/Pages/Search';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] =useState([]);
  const [searchValue, setSearchValue] =useState('');
    
    const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=948376b8`

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) {
          setMovies(responseJson.Search)
    }
};

useEffect(() => {
    getMovieRequest(searchValue);
}, [searchValue])


  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
      <Route exact path='/home' element={<Home searchValue={searchValue} setSearchValue={setSearchValue} movies={movies} />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/needToWatch' element={<NeedToWatch />}/>
        <Route path='/watchList' element={<WatchList />}/>
        <Route path='/search' element={<Search />}/>
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;