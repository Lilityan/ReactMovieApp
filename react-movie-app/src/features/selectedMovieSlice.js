import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    selectedMovie: {}
}

export const selectedMovieSlice = createSlice({
    name: "features/selectedMovie",
    initialState,
    reducers: {
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload
        }
    },
})

export const { setSelectedMovie } = selectedMovieSlice.actions;
export default selectedMovieSlice.reducer;