import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import axios from 'axios';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useSelector } from 'react-redux';

const Favorite = () => {

	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [hasNextPage, setHasNextPage] = useState(true);

	const { favoriteMoivies: { results: movies } } = useSelector(state => state.favoriteMoivies);
	const moviesPerPage = 20;

	const getmore = async () => {

		try {
			const nextMovies = movies.slice[(currentPage-1)*moviesPerPage, currentPage*moviesPerPage]
			return setData((data) => [...data, ...nextMovies]);
		}
		catch (e) {
			console.log(e);
			return setHasNextPage(false);
		}
		finally {
			setCurrentPage(currentPage + 1)
			return setLoading(false);
		}

	}

	const [sentryRef] = useInfiniteScroll({
		loading,
		hasNextPage: hasNextPage,
		delayInMs: 50,
		onLoadMore: () => {
			getmore(currentPage);
		}
	})


	return (
		<>
			<h1>Favorite Movies</h1>
			<Container fluid>
				<Row lg={'auto'}>
					{data.map((movie, index) => { return (<Col sm key={index}><MovieCard movie={movie} /></Col>) })}
				</Row>
			</Container>
			{
				(loading || hasNextPage) &&
				<div className="loader" ref={sentryRef}>
					<h1>Loading...</h1>
				</div>
			}

		</>
	);
};

export default Favorite;