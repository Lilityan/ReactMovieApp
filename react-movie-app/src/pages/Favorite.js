import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useSelector } from 'react-redux';

const Favorite = () => {
	const favoriteMovies = useSelector(state => state.favoriteMovies);

	return (
		<>
			{favoriteMovies ? <><h1>Favorite Movies</h1>
				<Container fluid>
					<Row lg={'auto'}>
						{favoriteMovies.favoriteMovies.map((movie, index) => { return (<Col sm key={index}><MovieCard movie={movie} /></Col>) })}
					</Row>
				</Container>
			</> : <>There is no added favorite movies</>}

		</>
	);
};

export default Favorite;