import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../store/uiSlice';
import { render } from '@testing-library/react';

export function renderWithProviders(ui: React.ReactElement) {
  const store = configureStore({
    reducer: {
      ui: uiReducer,
    },
  });

  return render(<Provider store={store}>{ui}</Provider>);
}
