import { createReducer } from "@reduxjs/toolkit";

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SORT_ITEMS = 'SORT_ITEMS';

const itemsReducer = createReducer([], (builder) => {
  builder
    .addCase(ADD_ITEM, (state, action) => {
      state.push(action.payload);
    })
    .addCase(REMOVE_ITEM, (state, action) => {
      state.filter((item) => item.name !== action.payload);
    })
    .addCase(SORT_ITEMS, (state) => {
      state.sort((prev, current) =>  current.score - prev.score);
    })
});

export default itemsReducer;