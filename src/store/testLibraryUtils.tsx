// store/testLibraryUtils.ts

import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import movieReducer from './modules/movieSlice';
import thunk from 'redux-thunk';

const renderWithRedux = (
  ui: React.ReactElement,
  {
    store = configureStore({
      reducer: {
        movies: movieReducer,
      },
      middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
    }),
  } = {},
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

export {renderWithRedux};
