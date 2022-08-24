import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userLoggedIn: {},
  error: '',
};

const userLoggedInSlice = createSlice({
  name: 'userLoggedIn',
  initialState,
  reducers: {
    setUserLoggedIn(state, action) {
      state.loading = false;
      state.userLoggedIn = {...action.payload};
      state.error = '';
    },

    setUserLoggedOut(state, action) {
      state.loading = false;
      state.userLoggedIn = {};
      state.error = '';
    }
  }
});

export const { setUserLoggedIn, setUserLoggedOut } = userLoggedInSlice.actions;

export default userLoggedInSlice.reducer;

