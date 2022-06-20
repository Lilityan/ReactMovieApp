import { configureStore } from "@reduxjs/toolkit";
import popularMoviesSlice from "../features/popularMovies/popularMoviesSlice";

export const store = configureStore({
    reducer: {
        popularMovies: popularMoviesSlice,
    },
})