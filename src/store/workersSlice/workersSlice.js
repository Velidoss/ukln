import { createSlice } from "@reduxjs/toolkit";
import compareWorkHours from "../../utils/compareWorkHours";
import compareWithNewWorker from './../../utils/compareWithNewWorker';

const initialState = [];

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers : {
    addWorker: (state, action) => {
      compareWithNewWorker(state, {...action.payload, score: 0, compared: []});
    },
    removeWorker: (state, action) => {
      state.filter((item) => item.name !== action.payload);
      compareWorkHours(state);
    },
    sortWorkers: (state) => {
      state.sort((prev, current) =>  current.score - prev.score);
    }
  }
});


export const {addWorker, removeWorker, sortWorkers} = itemSlice.actions;
export default itemSlice.reducer;