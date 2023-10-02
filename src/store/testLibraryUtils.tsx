import {configureStore} from '@reduxjs/toolkit';
import {render, RenderResult} from '@testing-library/react';
import React from 'react';
import {Provider} from 'react-redux';
import {store as defaultStore, RootState} from './store'; // Make sure paths are correct
import movieSlice from './modules/movieSlice';

interface RenderWithReduxOptions {
  store?: typeof defaultStore;
  initialState?: RootState;
}
export function renderWithRedux(
  ui: React.ReactNode,
  {store, initialState}: RenderWithReduxOptions = {},
): RenderResult & {store: typeof defaultStore} {
  if (!store) {
    store = configureStore({
      reducer: {
        movies: movieSlice, // Adjust this based on where your reducers are.
      },
      preloadedState: initialState,
    });
  }

  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}
