import React from 'react';
import Movies from '../pages/Movies';

const Popular = () => {

	return (
		<>
			<Movies url={`movie/popular`} title={"Popular movies"} />
		</>
	);
};

export default Popular;