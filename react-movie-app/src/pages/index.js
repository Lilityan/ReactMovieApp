import React, { useEffect } from 'react';
import MovieCarusel from '../components/MovieCarusel';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularMovies } from '../features/popularMovies/popularMoviesSlice';
import axios from 'axios';
import Section from '../components/Section';
import { getTopRatedMovies } from '../features/topRatedMovies/topRatedSlice';
import { getUpcomingMovies } from '../features/upcomingMovies/upcomingMoviesSlice';

const Home = () => {
	const dispatch = useDispatch();
	const { popularMovies: { results: allPopularMovies } } = useSelector(state => state.popularMovies);
	const { upcomingMovies: { results: upcomingMovies } } = useSelector(state => state.upcomingMovies);
	const { topRatedMovies: { results: topRatedMovies } } = useSelector(state => state.topRatedMovies);
	const popFiveMovies = allPopularMovies?.slice(0, 5);
	axios.defaults.baseURL = "https://api.themoviedb.org/3/";

	useEffect(() => {
		dispatch(getPopularMovies());
		dispatch(getTopRatedMovies());
		dispatch(getUpcomingMovies());
	}, [dispatch]);

	return (
		<div>
			<h1>5 popular movies</h1>
			{popFiveMovies ? <MovieCarusel movies={popFiveMovies} /> : <></>}
			{popFiveMovies ? <Section movieList={allPopularMovies} title={"Popular movies"} path={"/popular"}/> : <></>}
			{upcomingMovies ? <Section movieList={upcomingMovies} title={"Upcoming movies"} path={"/upcoming"}/> : <></>}
			{topRatedMovies ? <Section movieList={topRatedMovies} title={"Top-rated movies"} path={"/toprated"}/> : <></>}
		</div>
	);
};

export default Home;
