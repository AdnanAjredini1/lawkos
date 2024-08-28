
import { configureStore } from '@reduxjs/toolkit';
import darkSlice from './slice/darkModeSlice';
import languageSlice from './slice/languageSlice';


const store = configureStore({
  reducer: {
    dark: darkSlice.reducer,
    language:languageSlice.reducer
  }
});

export default store;