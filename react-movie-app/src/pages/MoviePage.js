import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./MoviePage.css";
import { ToggleButton } from 'react-bootstrap';
import { setFavoriteMovie } from '../features/favoriteMovieSlice';

const MoviePage = () => {
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"
	const { selectedMovie: movie } = useSelector(state => state.selectedMovie);
	const favoriteMovies = useSelector(state => state.favoriteMovies);
	const [checked, setChecked] = useState(false)
	const dispatch = useDispatch();

	const movieIsAdded = favoriteMovies.favoriteMoviesIds.includes(movie.id)
	const handleAddToFavorite = (e) => {
		setChecked(e.currentTarget.checked);
		if (!movieIsAdded) {
			dispatch(setFavoriteMovie(movie));
		}
	}

	return (
		<div className={styles.movieDetailsContainer}>
			<img
				src={`${IMAGE_BASE_URL}/${movie.backdrop_path}`}
				width={700}
				alt={movie.title}
				className={styles.movieImage}
			/>
			<div className={styles.movieDetailsContent}>
				<p>
					<strong>Title:</strong> {movie.title}
				</p>
				<p>
					<strong>Description:</strong> {movie.overview}
				</p>
				<p>
					<strong>Overview:</strong> {movie.overview}
				</p>
				<p>
					<strong>Average vote:</strong> {movie.vote_average}
				</p>
				<p>
					<strong>Release date:</strong> {movie.release_date}
				</p>
			</div>
			{movieIsAdded ? <text style={{color: "red"}}>This movie has been added to favorite</text> : <ToggleButton
				className="mb-2"
				id="toggle-check"
				type="checkbox"
				variant="outline-primary"
				checked={checked}
				value="1"
				onChange={handleAddToFavorite}
			>
				Add to favorite list
			</ToggleButton>}
		</div >
	);
};

export default MoviePage;