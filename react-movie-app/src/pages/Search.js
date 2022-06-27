import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Search = () => {

	const [searchKey, setSearchKey] = useState("");
	const [movies, setMovies] = useState([]);
	const getData = async () => {
		axios.get(`/search/movie`, {
			params: {
				api_key: process.env.REACT_APP_MOVIE_API_KEY,
				query: searchKey
			}
		}).then(res => setMovies([...res.data.results]))
	}

	const handleSearchClick = () => {
		getData();
	}


	return (
		<>
			<input
				style={{ width: "400px", margin: "10px" }}
				onChange={(e) => setSearchKey(e.target.value)}
			/>
			<button type="submit" onClick={handleSearchClick}>Search</button>
			{movies ? <><h1>{`Results by searching "${searchKey}"`}</h1>
				<Container fluid>
					<Row lg={'auto'}>
						{movies.map((movie, index) => { return (<Col sm key={index}><MovieCard movie={movie} /></Col>) })}
					</Row>
				</Container>
			</> : <>There is no any movies by your search</>}
		</>);
};

export default Search;