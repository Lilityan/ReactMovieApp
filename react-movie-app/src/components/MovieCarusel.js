import React from 'react';
import { Carousel } from "react-bootstrap";

const MovieCarusel = ({ movies }) => {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"
    return (
        <div>
            <Carousel>
                {movies?.map((movie) => {
                    return (
                        <Carousel.Item style={{ height: 600 }} key={movie.id}>
                            <img
                                className="d-block w-100"
                                src={`${IMAGE_BASE_URL}/${movie.backdrop_path}`}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{movie.original_title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
};

export default MovieCarusel;