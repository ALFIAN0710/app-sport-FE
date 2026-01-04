import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
  accessToken: null,
  loggedinUser: null,
  counter: 0,
  isInitialized: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    reset: () => initialState,
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setLoggedinUser: (state, action) => {
      state.loggedinUser = action.payload;
    },
    setInitialized: (state, action) => {
      state.isInitialized = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('loggedinUser');
    },
  },
});

export const { 
  reset,
  setAccessToken, 
  setLoggedinUser, 
  logoutUser, 
  setInitialized 
} = appSlice.actions;

export default appSlice.reducer;