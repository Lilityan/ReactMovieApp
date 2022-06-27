import { configureStore } from "@reduxjs/toolkit";
import popularMoviesSlice from "../features/popularMovies/popularMoviesSlice";
import topRatedSlice from "../features/topRatedMovies/topRatedSlice";
import upcomingMoviesSlice from "../features/upcomingMovies/upcomingMoviesSlice";
import selectedMovieSlice from "../features/selectedMovieSlice";
import favoriteMovieSlice from "../features/favoriteMovieSlice";

export const store = configureStore({
    reducer: {
        popularMovies: popularMoviesSlice,
        topRatedMovies: topRatedSlice,
        upcomingMovies: upcomingMoviesSlice,
        selectedMovie: selectedMovieSlice,
        favoriteMovies: favoriteMovieSlice,
    },
})