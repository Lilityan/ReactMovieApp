import React, { useEffect } from 'react';
import MovieCarusel from '../components/MovieCarusel';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularMovies } from '../features/popularMovies/popularMoviesSlice';
import axios from 'axios';
import Section from '../components/Section';
import MovieCard from '../components/MovieCard';

const Home = () => {
	const dispatch = useDispatch();
	const { popularMovies: { results: allPopularMovies } } = useSelector(state => state.popularMovies);
	const popFiveMovies = allPopularMovies?.slice(0, 9);
	axios.defaults.baseURL = "https://api.themoviedb.org/3/";

	useEffect(() => {
		dispatch(getPopularMovies());
	}, [dispatch]);


	return (
		<div>
			<h1>5 popular movies</h1>
			{popFiveMovies ? <MovieCarusel movies={popFiveMovies} /> : <></>}
			{popFiveMovies ? <Section movieList={popFiveMovies} title={"Popular movies"} path={"/popular"}/> : <></>}
			{popFiveMovies ? <MovieCard movie={popFiveMovies[0]} /> : <></>}
		</div>
	);
};

export default Home;
