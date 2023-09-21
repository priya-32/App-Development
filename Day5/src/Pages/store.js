import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the default export from userSlice

export default configureStore({
  reducer: {
    user: userReducer, // Use the default export as the reducer
  },
});
