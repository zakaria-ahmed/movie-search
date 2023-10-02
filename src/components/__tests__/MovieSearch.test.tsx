import React from 'react';
import {screen, fireEvent, waitFor} from '@testing-library/react';
import MovieSearch from '../MovieSearch';
import {renderWithRedux} from '../../store/testLibraryUtils';

// Mock fetch for the entire file.
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

describe('MovieSearch Component', () => {
  beforeEach(() => {
    // Clear all mock implementations and responses before each test.
    fetchMock.resetMocks();
  });

  it('renders without crashing', () => {
    renderWithRedux(<MovieSearch />);
    const inputElement = screen.getByPlaceholderText('Search for a movie...');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls fetchMovieSuggestions when user types', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]));
    renderWithRedux(<MovieSearch />);
    const inputElement = screen.getByPlaceholderText('Search for a movie...');
    fireEvent.change(inputElement, {target: {value: 'Inception'}});
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        'https://movies-mock-api-s7oiqxtmzq-lz.a.run.app/api/movies?q=Inception',
      );
    });
  });
});
