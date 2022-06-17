import React from 'react';
import { Carousel } from "react-bootstrap";

const MovieCarusel = ({ movies }) => {
    return (
        <div>
            <Carousel>
                {movies.map((movie) => {
                    return (
                        <Carousel.Item style={{ height: 600 }}>
                            <img
                                className="d-block w-100"
                                src={movie}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
};

export default MovieCarusel;