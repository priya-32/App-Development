// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null, // Your user state
  },
  reducers: {
    login: (state, action) => {
      // Logic for handling login
      state.user = action.payload;
    },
    logout: (state) => {
      // Logic for handling logout
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
