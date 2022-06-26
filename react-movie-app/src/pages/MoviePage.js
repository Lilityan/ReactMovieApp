import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from "./MoviePage.css";
import { ToggleButton } from 'react-bootstrap';

const MoviePage = () => {
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"
	const { selectedMovie: movie } = useSelector(state => state.selectedMovie);
	const [checked, setChecked] = useState(false)

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
			<ToggleButton
				className="mb-2"
				id="toggle-check"
				type="checkbox"
				variant="outline-primary"
				checked={checked}
				value="1"
				onChange={(e) => setChecked(e.currentTarget.checked)}
			>
				Add to favorite list
			</ToggleButton>
		</div >
	);
};

export default MoviePage;