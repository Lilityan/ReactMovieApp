import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import axios from 'axios';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useInfiniteScroll from 'react-infinite-scroll-hook';

const Movies = ({url, title}) => {
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [hasNextPage, setHasNextPage] = useState(true);

	const fetchmore = async () => {

		try {
			const response = await axios.get(`https://api.themoviedb.org/3/${url}`, {
				params: {
					api_key: process.env.REACT_APP_MOVIE_API_KEY,
					page: currentPage
				}
			});
			const json = await response;
			return setData((data) => [...data, ...json.data.results]);
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
		delayInMs: 100,
		onLoadMore: () => {
			fetchmore(currentPage);
		}
	})


	return (
		<>
			<h1>{title}</h1>
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

export default Movies;
