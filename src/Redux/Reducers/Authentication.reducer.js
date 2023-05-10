import { createSlice } from "@reduxjs/toolkit";

export const AuthenticationReducer = createSlice({
  name: "authentication",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    saveLoggedInUser: (state, action) => {
      if (action.payload && action.payload.userName) {
        state.isLoggedIn = true;
        state.user = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveLoggedInUser } = AuthenticationReducer.actions;
export default AuthenticationReducer.reducer;
