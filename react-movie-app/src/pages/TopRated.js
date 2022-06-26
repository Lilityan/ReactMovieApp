import React from 'react';
import Movies from '../pages/Movies'

const TopRated = () => {
	return (
		<Movies url={`movie/top_rated`} title={"Top rated"} />
	);
};

export default TopRated;
