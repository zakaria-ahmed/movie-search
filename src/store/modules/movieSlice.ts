import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MovieState } from '../../models/movie.model';

const initialState: MovieState = {
    suggestions: [],
    results: [],
    status: 'idle',
    error: null,
};

export const fetchMovieSuggestions = createAsyncThunk(
    'movies/fetchMovieSuggestions',
    async (query: string) => {
        const response = await fetch(`https://movies-mock-api-s7oiqxtmzq-lz.a.run.app/api/movies?q=${query}`);
        // error handling
        if (!response.ok) {
            throw new Error('Server error');
        }
        const data = await response.json();
        return data;
    }
);

export const fetchMovieResults = createAsyncThunk(
  'movies/fetchMovieResults',
  async (query: string) => {
      const response = await fetch(`https://movies-mock-api-s7oiqxtmzq-lz.a.run.app/api/movies?q=${query}`);
      // error handling
      if (!response.ok) {
          throw new Error('Server error');
      }
      const data = await response.json();
      return data;
  }
);

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearSuggestions: (state) => {
        state.suggestions = [];
    },
    clearResults: (state) => {
        state.results = [];
    },
  },
  extraReducers: builder => {
      builder.addCase(fetchMovieSuggestions.pending, (state) => {
          state.status = 'loading';
      });
      builder.addCase(fetchMovieSuggestions.fulfilled, (state, action: PayloadAction<Movie[]>) => {
          state.status = 'succeeded';
          state.suggestions = action.payload;
      });
      builder.addCase(fetchMovieSuggestions.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message || 'An error occurred';
      });
      
      builder.addCase(fetchMovieResults.pending, (state) => {
          state.status = 'loading';
      });
      builder.addCase(fetchMovieResults.fulfilled, (state, action: PayloadAction<Movie[]>) => {
          state.status = 'succeeded';
          state.results = action.payload;
      });
      builder.addCase(fetchMovieResults.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message || 'An error occurred';
      });
  }
});
export const { clearSuggestions, clearResults } = movieSlice.actions;

export default movieSlice.reducer;
