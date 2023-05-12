import { createSlice } from "@reduxjs/toolkit";

export const AuthenticationReducer = createSlice({
  name: "authentication",
  initialState: {
    isLoggedIn: false,
    user: null,
    isUser: false,
    isAdmin: false,
    isSuperAdmin: false,
  },
  reducers: {
    saveLoggedInUser: (state, action) => {
      if (action.payload && action.payload._id) {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isUser = action.payload.generalDetails.roles.indexOf("user") > -1;
        state.isAdmin =
          action.payload.generalDetails.roles.indexOf("admin") > -1;
        state.isSuperAdmin =
          action.payload.generalDetails.roles.indexOf("superAdmin") > -1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveLoggedInUser } = AuthenticationReducer.actions;
export default AuthenticationReducer.reducer;
