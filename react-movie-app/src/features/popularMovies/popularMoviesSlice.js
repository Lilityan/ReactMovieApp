import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    popularMovies: []
}

export const getPopularMovies = createAsyncThunk('popularMovies/getPopularMovies', async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`movie/popular`, {
        params: {
            api_key: process.env.REACT_APP_MOVIE_API_KEY
        }
    });
    dispatch(setPopularMovies(res.data))
})

export const popularMoviesSlice = createSlice({
    name: "features/popularMovies",
    initialState,
    reducers: {
        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        }
    },
    // extraReducers: {
    //     [getPopularMovies.fulfilled]: () => console.log("fulfilled"),
    //     [getPopularMovies.pending]: () => console.log("pending"),
    //     [getPopularMovies.rejected]: () => console.log("rejected")
    // }
})

export const { setPopularMovies } = popularMoviesSlice.actions;
export default popularMoviesSlice.reducer;