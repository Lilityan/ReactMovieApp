import React, { useState, useEffect } from 'react';
import MovieCarusel from '../components/MovieCarusel';
import useFetch from "../hooks/useFetch";

const Home = () => {
	const [topFiveMovies, SetTopFiveMovies] = useState([]);
	// const topFiveMovies = ["https://4.bp.blogspot.com/-DLjAz2-Krqk/U0pEVe2m1tI/AAAAAAAAA7s/ym3CglkFbwQ/s1600/Stunning.jpg",
	// 	"https://th.bing.com/th/id/OIP.R6L4wr-recEuACxs_ahmkAHaES?pid=ImgDet&rs=1",
	// 	 "https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg"]

	const data = useFetch("https://jsonplaceholder.typicode.com/todos");
	useEffect(() => {
		SetTopFiveMovies(data)
	  }, []);
	
	console.log(topFiveMovies)
		 return (
		<div>
			<h1>5 popular movies</h1>
			<MovieCarusel movies={topFiveMovies} />
		</div>
	);
};

export default Home;
