import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   topRatedMovies: []
}

export const getTopRatedMovies = createAsyncThunk('topRatedMovies/getTopRatedMovies', async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`movie/top_rated`, {
        params: {
            api_key: process.env.REACT_APP_MOVIE_API_KEY
        }
    });
    dispatch(setTopRatedMovies(res.data))
})

export const topRatedSlice = createSlice({
    name: "features/topRatedMovies",
    initialState,
    reducers: {
        setTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        }
    },
})

export const { setTopRatedMovies } = topRatedSlice.actions;
export default topRatedSlice.reducer;