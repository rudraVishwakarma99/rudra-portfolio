import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  theme: 'light' | 'dark';
  activeFilter: string | null;
}

const initialState: UiState = {
  theme: 'light',
  activeFilter: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setActiveFilter: (state, action: PayloadAction<string | null>) => {
      state.activeFilter = state.activeFilter === action.payload ? null : action.payload;
    }
  }
});

export const { toggleTheme, setActiveFilter } = uiSlice.actions;
export default uiSlice.reducer;