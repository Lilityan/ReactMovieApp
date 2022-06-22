import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';

const Popular = () => {
	
	const { popularMovies: { results: movies } } = useSelector(state => state.popularMovies);
	
	return (
		<>
			<h1>Popular movies</h1>
			<Container fluid>
				<Row lg={'auto'}>
					{movies?.map(movie => { return (<Col sm><MovieCard movie={movie} /></Col>) })}
				</Row>
			</Container>
		</>
	);
};

export default Popular;
