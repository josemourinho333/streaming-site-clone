import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdb from "../api/tmdb";

const initialState = {
  loading: false,
  reqToken: {},
  isOpen: false,
  error: '',
};

export const fetchReqToken = createAsyncThunk('auth/fetchReqToken', (close) => {
  if (close) {
    return {};
  } else {
    return tmdb
    .get('authentication/token/new')
    .then((response) => response.data);
  }
});

const reqTokenSlice = createSlice({
  name: 'reqToken',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReqToken.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchReqToken.fulfilled, (state, action) => {
      if (Object.keys(action.payload).length < 1) {
        state.loading = false;
        state.reqToken = {...action.payload};
        const current = state.isOpen;
        state.isOpen = !current;
        state.error = '';
      } else {
        state.loading = false;
        state.reqToken = {...action.payload};
        localStorage.setItem('request_token', JSON.stringify(action.payload));
        const current = state.isOpen;
        state.isOpen = !current;
        state.error = '';
      }
    });
  }
});

export default reqTokenSlice.reducer;