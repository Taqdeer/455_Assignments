import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { addUserAsync, getUsersAsync, removeUserAsync } from './thunks';

const INITIAL_STATE = {
  list: [],
  getUsers: REQUEST_STATE.IDLE,
  addUser: REQUEST_STATE.IDLE,
  removeUser: REQUEST_STATE.IDLE,
  error: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.getUsers = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.getUsers = REQUEST_STATE.FULFILLED;
        console.log("in reducer")
        console.log(action.payload)
        state.list = action.payload;
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.getUsers = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(addUserAsync.pending, (state) => {
        state.addUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.addUser = REQUEST_STATE.FULFILLED;
        state.list.push(action.payload);
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        state.addUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(removeUserAsync.pending, (state) => {
        console.log("in reducer delete pending")
        state.removeUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(removeUserAsync.fulfilled, (state, action) => {
        state.removeUser = REQUEST_STATE.FULFILLED;
        console.log("in reducer delete fulfilled")
        console.log(action.payload)
        state.list = action.payload
      })
      .addCase(removeUserAsync.rejected, (state, action) => {
        state.removeUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  }
});

export default usersSlice.reducer;
