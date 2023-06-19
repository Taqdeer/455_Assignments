import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { addItemAsync, getItemsAsync, removeItemAsync } from './thunks';

const INITIAL_STATE = {
  list: [],
  getItems: REQUEST_STATE.IDLE,
  addItem: REQUEST_STATE.IDLE,
  removeItem: REQUEST_STATE.IDLE,
  error: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItemsAsync.pending, (state) => {
        state.getItems = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getItemsAsync.fulfilled, (state, action) => {
        state.getItems = REQUEST_STATE.FULFILLED;
        console.log("in reducer")
        console.log(action.payload)
        state.list = action.payload;
      })
      .addCase(getItemsAsync.rejected, (state, action) => {
        state.getItems = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(addItemAsync.pending, (state) => {
        state.addItem = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.addItem = REQUEST_STATE.FULFILLED;
        state.list.push(action.payload);
      })
      .addCase(addItemAsync.rejected, (state, action) => {
        state.addItem = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(removeItemAsync.pending, (state) => {
        console.log("in reducer delete pending")
        state.removeItem = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(removeItemAsync.fulfilled, (state, action) => {
        state.removeItem = REQUEST_STATE.FULFILLED;
        console.log("in reducer delete fulfilled")
        console.log(action.payload)
        state.list = action.payload
      })
      .addCase(removeItemAsync.rejected, (state, action) => {
        state.removeItem = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  }
});

export default usersSlice.reducer;
