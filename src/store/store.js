
import { configureStore } from '@reduxjs/toolkit';
import darkSlice from './slice/darkModeSlice';


const store = configureStore({
  reducer: {
    dark: darkSlice.reducer
  }
});

export default store;