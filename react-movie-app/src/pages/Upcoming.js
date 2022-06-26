import React from 'react';
import Movies from "../pages/Movies";

const Upcoming = () => {

	return (
		<Movies url={`movie/upcoming`} title={"Upcoming movies"} />
	);
};

export default Upcoming;