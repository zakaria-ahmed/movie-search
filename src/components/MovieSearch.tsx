import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearSuggestions,
  fetchMovieResults,
  fetchMovieSuggestions,
} from '../store/modules/movieSlice';
import {RootState, AppDispatch} from '../store/store';
import debounce from 'lodash/debounce';
import {Movie} from '../models/movie.model';

export const MovieSearch = () => {
  const dispatch: AppDispatch = useDispatch();
  const results: Movie[] = useSelector(
    (state: RootState) => state.movies.results,
  );
  const suggestions: Movie[] = useSelector(
    (state: RootState) => state.movies.suggestions,
  );
  const status = useSelector((state: RootState) => state.movies.status);
  const error = useSelector((state: RootState) => state.movies.error);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = async (value: string) => {
    setInputValue(value);
    if (value.length > 0) {
      dispatch(fetchMovieSuggestions(value));
    }
  };

  const handleSearch = debounce((query: string) => {
    dispatch(fetchMovieResults(query));
    dispatch(clearSuggestions());
  }, 300);

  const selectMovieFromSuggestions = (movieTitle: string) => {
    setInputValue(movieTitle);
    handleSearch(movieTitle);
  };

  let content;
  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded' && results.length > 0) {
    content = (
      <ul>
        {results.map((movie: Movie) => (
          <li key={movie.id}>
            <h3>{movie.name}</h3>
            <p>{movie.description}</p>
            <p>Genres: {movie.genres.join(', ')}</p>
            <p>Duration: {movie.duration / 60} minutes</p>
          </li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <div>Error: {error}</div>;
  }

  return (
    <div className="movie-search-container">
      <div className="search-field">
        <input
          value={inputValue}
          onChange={e => handleInputChange(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button onClick={() => handleSearch(inputValue)}>Search</button>
        {suggestions.length > 0 && (
          <div className="suggestions">
            {suggestions.map(title => (
              <div
                key={title.id}
                className="suggestion"
                onClick={() => selectMovieFromSuggestions(title.name)}>
                {title.name}
              </div>
            ))}
          </div>
        )}
      </div>
      {content}
    </div>
  );
};

export default MovieSearch;
