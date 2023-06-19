import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import ItemService from './service';

export const getItemsAsync = createAsyncThunk(
  actionTypes.GET_ITEMS,
  async () => {
    return await ItemService.getItems();
  }
);

export const addItemAsync = createAsyncThunk(
  actionTypes.ADD_ITEM,
  async (item) => {
    return await ItemService.addItem({ item });
  }
);

export const removeItemAsync = createAsyncThunk(
  actionTypes.REMOVE_ITEM,
  async (item) => {
    return await ItemService.removeItem({ item });
  }
);

export const filterItemsAsync = createAsyncThunk(
  actionTypes.FILTER_ITEMS,
  async (item) => {
    return await ItemService.filterItems({ item });
  }
)