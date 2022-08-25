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
      localStorage.setItem('user_info', JSON.stringify(action.payload));
      state.error = '';
    },

    setUserLoggedOut(state, action) {
      state.loading = false;
      state.userLoggedIn = {};
      localStorage.removeItem('user_info');
      state.error = '';
    },
  }
});

export const { setUserLoggedIn, setUserLoggedOut } = userLoggedInSlice.actions;

export default userLoggedInSlice.reducer;

