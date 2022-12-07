import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Favorites from './components/Pages/Favorites';
import Home from './components/Pages/Home';
import NeedToWatch from './components/Pages/NeedToWatch';
import WatchList from './components/Pages/WatchList';
import Search from './components/Pages/Search';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/home' element={<Home />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/needToWatch' element={<NeedToWatch />}/>
        <Route path='/watchList' element={<WatchList />}/>
        <Route path='/search' element={<Search />}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;