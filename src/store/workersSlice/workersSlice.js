import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers : {
    addWorker: (state, action) => {
      state.push(action.payload);
    },
    removeWorker: (state, action) => {
      state.filter((item) => item.name !== action.payload);
    },
    sortWorkers: (state) => {
      state.sort((prev, current) =>  current.score - prev.score);
    }
  }
});


export const {addWorker, removeWorker, sortWorkers} = itemSlice.actions;
export default itemSlice.reducer;