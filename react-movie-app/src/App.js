import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Favorite from './pages/Favorite';
import Popular from './pages/Popular';
import Search from './pages/Search';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import MoviePage from './pages/MoviePage';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/home' element={<Home/>} />
		<Route path='/favorite' element={<Favorite/>} />
		<Route path='/moviePage' element={<MoviePage/>} />
		<Route path='/popular' element={<Popular/>} />
    	<Route path='/search' element={<Search/>} />
    	<Route path='/topRated' element={<TopRated/>} />
    	<Route path='/upcoming' element={<Upcoming/>} />
	</Routes>
	</Router>
);
}

export default App;
