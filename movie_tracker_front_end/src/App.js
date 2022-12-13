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
import EditMovie from './components/EditMovie';

function App() {
  const [movies, setMovies] =useState([]);
  const [movieAdd, setMovieAdd] = useState([]);
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

const AddMovieToLibrary = (movie) => {
  const newLibraryList = [...movieAdd, movie];
  setMovieAdd(newLibraryList)
}

  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/movie/:movieId(\d+)' element={<EditMovie />} />
        <Route exact path='/favorites' element={<Favorites />}/>
        <Route exact path='/needToWatch' element={<NeedToWatch />}/>
        <Route exact path='/watchList' element={<WatchList />}/>
        <Route exact path='/search' element={<Search searchValue={searchValue} setSearchValue={setSearchValue} movies={movies} handleAddToLibraryClick={AddMovieToLibrary}/>}/>
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;