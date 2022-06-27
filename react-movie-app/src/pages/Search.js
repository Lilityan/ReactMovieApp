import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useInfiniteScroll from 'react-infinite-scroll-hook';


const Search = () => {

	const [searchKey, setSearchKey] = useState("");
	const [movies, setMovies] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [hasNextPage, setHasNextPage] = useState(true);

	const fetchmore = async () => {
		try {
			axios.get(`/search/movie`, {
				params: {
					api_key: process.env.REACT_APP_MOVIE_API_KEY,
					query: searchKey,
					page: currentPage
				}
			}).then(res => setMovies([...movies, ...res.data.results]))
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
		delayInMs: 200,
		onLoadMore: () => {
			fetchmore(currentPage);
		}
	})

	const handleOnChange = (e) => {
		setMovies([]);
		setSearchKey(e.target.value);
		if (searchKey === "") {
			setLoading(false);
			setHasNextPage(true);
			setCurrentPage(1);
		}
	}

	return (
		<>
			<input
				style={{ width: "500px", margin: "10px" }}
				placeholder="Search"
				onChange={(e) => handleOnChange(e)}
			/>
			{searchKey ? <><h1>{`Results by searching "${searchKey}"`}</h1>
				<Container fluid>
					<Row lg={'auto'}>
						{movies.map((movie, index) => { return (<Col sm key={index}><MovieCard movie={movie} /></Col>) })}
					</Row>
				</Container>
				{
					(loading || hasNextPage) &&
					<div className="loader" ref={sentryRef}>
						<h1>Loading...</h1>
					</div>
				}
			</> : <h1 style={{ margin: "10px" }}>Type something to search</h1>}
		</>);
};

export default Search;