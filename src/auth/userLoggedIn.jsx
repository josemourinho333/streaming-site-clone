import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdb from "../api/tmdb";

const initialState = {
  loading: false,
  userLoggedIn: {},
  error: '',
};



