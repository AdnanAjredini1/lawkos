import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
  name: "dark",
  initialState: { isDark: false },
  reducers: {
    switchToDark: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const darkActions = darkSlice.actions;

export default darkSlice;
