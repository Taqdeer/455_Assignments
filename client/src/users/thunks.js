import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './service';

export const getItemsAsync = createAsyncThunk(
  actionTypes.GET_USERS,
  async () => {
    return await UserService.getItems();
  }
);

export const addItemAsync = createAsyncThunk(
  actionTypes.ADD_USER,
  async (item) => {
    return await UserService.addItem({ item });
  }
);

export const removeItemAsync = createAsyncThunk(
  actionTypes.REMOVE_USER,
  async (item) => {
    return await UserService.removeItem({ item });
  }
);