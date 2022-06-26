import React from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedMovie } from '../features/selectedMovieSlice'

const MovieCard = ({ movie }) => {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleMovieClick = () => {
        dispatch(setSelectedMovie(movie))
        navigate(`${movie.id}`)
    }
    return (
        <Card style={{ width: '14rem', height: '20rem' }} onClick={handleMovieClick}>
            <Card.Img variant="top" src={`${IMAGE_BASE_URL}/${movie.backdrop_path}`} />
            <Card.Body>
                <Card.Title>{movie ? movie.original_title : ""}</Card.Title>
                <Card.Text>Rating: {movie.vote_average}</Card.Text>
                <Card.Text>Viewed: {movie.vote_count}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MovieCard;