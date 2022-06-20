import React from "react";
import Card from 'react-bootstrap/Card';

const MovieCard = ({ movie }) => {
    console.log(movie, "movieeeeeeeeeeeeeeeeeeeeeeeeF")
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${IMAGE_BASE_URL}/${movie.backdrop_path}`} />
            <Card.Body>
                <Card.Title>{movie ? movie.original_title : ""}</Card.Title>
                <Card.Text>Rating: {movie.vote_average}</Card.Text>
                <Card.Text>Viewed: {movie.vote_count}</Card.Text>
            </Card.Body>
        </Card>)
}

export default MovieCard;