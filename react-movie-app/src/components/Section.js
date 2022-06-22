import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from "./MovieCard";
import Header from "./Header";

const Section = ({ movieList, title, path }) => {

    const gridMovies = movieList?.slice(0,6);
    return (
        <>
        <Header title={title} path={path} />
        <Container fluid>
            <Row lg={'auto'}>
                {gridMovies?.map(movie => { return (<Col sm><MovieCard movie={movie} /></Col>) })}
            </Row>
        </Container>
        </>
    )
}

export default Section;

