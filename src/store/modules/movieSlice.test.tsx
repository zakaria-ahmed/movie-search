import {
  movieSlice,
  fetchMovieSuggestions,
  fetchMovieResults,
} from './movieSlice';
import {MovieState} from '../../models/movie.model';

describe('movieSlice reducer', () => {
  const initialState: MovieState = {
    suggestions: [],
    results: [],
    status: 'idle',
    error: null,
  };

  it('should handle initial state', () => {
    expect(movieSlice.reducer(undefined, {type: 'unknown'})).toEqual(
      initialState,
    );
  });

  it('should handle fetchMovieSuggestions.pending', () => {
    const action = {type: fetchMovieSuggestions.pending.type};
    const expectedState = {...initialState, status: 'loading'};
    expect(movieSlice.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle fetchMovieResults.pending', () => {
    const action = {type: fetchMovieResults.pending.type};
    const expectedState = {...initialState, status: 'loading'};
    expect(movieSlice.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle fetchMovieSuggestions.fulfilled', () => {
    const mockSuggestions = [
      {
        id: '1',
        name: 'Inception',
        description: 'mock description',
        thumbnail: 'mockThumbnailUrl',
        rating: 5,
        duration: 120,
        genres: ['action', 'sci-fi'],
        releasedAt: '2021-01-01',
      },
    ];
    const action = {
      type: fetchMovieSuggestions.fulfilled.type,
      payload: mockSuggestions,
    };
    const expectedState = {
      ...initialState,
      suggestions: mockSuggestions,
      status: 'succeeded',
    };
    expect(movieSlice.reducer(initialState, action)).toEqual(expectedState);
  });
});
