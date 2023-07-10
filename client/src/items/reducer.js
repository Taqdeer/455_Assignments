import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { addItemAsync, getItemsAsync, removeItemAsync, filterItemsAsync, updateUserDetailsAsync } from './thunks';

const INITIAL_STATE = {
  list: [],
  getItems: REQUEST_STATE.IDLE,
  addItem: REQUEST_STATE.IDLE,
  removeItem: REQUEST_STATE.IDLE,
  filterItems: REQUEST_STATE.IDLE,
  updateUserDetailsAsync: REQUEST_STATE.IDLE,
  error: null
};

const itemsSlice = createSlice({
  name: 'items',
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
        state.removeItem = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(removeItemAsync.fulfilled, (state, action) => {
        state.removeItem = REQUEST_STATE.FULFILLED;
        state.list = action.payload
      })
      .addCase(removeItemAsync.rejected, (state, action) => {
        state.removeItem = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(filterItemsAsync.pending, (state) => {
        state.filterItems = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(filterItemsAsync.fulfilled, (state, action) => {
        state.filterItems = REQUEST_STATE.FULFILLED;
        state.list = action.payload
      })
      .addCase(filterItemsAsync.rejected, (state, action) => {
        state.filterItems = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(updateUserDetailsAsync.pending, (state) => {
        state.filterItems = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(updateUserDetailsAsync.fulfilled, (state, action) => {
        state.filterItems = REQUEST_STATE.FULFILLED;
        state.list = action.payload
      })
      .addCase(updateUserDetailsAsync.rejected, (state, action) => {
        state.filterItems = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  }
});

export default itemsSlice.reducer;
