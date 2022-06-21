import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    upcomingMovies: []
}

export const getUpcomingMovies = createAsyncThunk('upcomingMovies/getUpcomingMovies', async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`movie/upcoming`, {
        params: {
            api_key: process.env.REACT_APP_MOVIE_API_KEY
        }
    });
    dispatch(setUpcomingMovies(res.data))
})

export const upcomingMoviesSlice = createSlice({
    name: "features/upcomingMovies",
    initialState,
    reducers: {
        setUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        }
    },
})

export const { setUpcomingMovies } = upcomingMoviesSlice.actions;
export default upcomingMoviesSlice.reducer;