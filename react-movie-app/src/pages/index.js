import React, { useEffect } from 'react';
import MovieCarusel from '../components/MovieCarusel';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularMovies } from '../features/popularMovies/popularMoviesSlice';
import axios from 'axios';

const Home = () => {
	const dispatch = useDispatch();
	const { popularMovies: { results: allPopularMovies} } = useSelector(state => state.popularMovies);
	const popFiveMovies = allPopularMovies?.slice(0,5);
	console.log(popFiveMovies, ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
	axios.defaults.baseURL = "https://api.themoviedb.org/3/";

	useEffect(() => {
		dispatch(getPopularMovies());
	}, [dispatch]);


	return (
		<div>
			<h1>5 popular movies</h1>
			<MovieCarusel movies={popFiveMovies} />
		</div>
	);
};

export default Home;
