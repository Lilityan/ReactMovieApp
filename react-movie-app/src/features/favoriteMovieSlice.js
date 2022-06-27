import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    favoriteMovies: [],
    favoriteMoviesIds: []
}

export const favoriteMoviesSlice = createSlice({
    name: "features/favoriteMovies",
    initialState,
    reducers: {
        setFavoriteMovie: (state, action) => {
            state.favoriteMovies = [...state.favoriteMovies, action.payload]
            state.favoriteMoviesIds = [...state.favoriteMoviesIds, action.payload.id]
        }
    },
})

export const { setFavoriteMovie } = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;