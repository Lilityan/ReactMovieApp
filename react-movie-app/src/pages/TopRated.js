import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';

const TopRated = () => {
	const { topRatedMovies: { results: movies } } = useSelector(state => state.topRatedMovies);

	return (
		<>
			<h1>Top rated mpvies</h1>
			<Container fluid>
				<Row lg={'auto'}>
					{movies?.map(movie => { return (<Col sm><MovieCard movie={movie} /></Col>) })}
				</Row>
			</Container>
		</>
	);
};

export default TopRated;
