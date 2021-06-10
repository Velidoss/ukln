import { createSlice } from "@reduxjs/toolkit";
import compareWorkHours from "../../utils/compareWorkHours";
import setComparisonsData from "../../utils/setComparisonsData";
import compareWithNewWorker from './../../utils/compareWithNewWorker';

const initialState = {
  workersData: [],
  comparisons: [],
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers : {
    addWorker: (state, action) => {
      compareWithNewWorker(state.workersData, {...action.payload, score: 0, compared: []});
      state.comparisons = setComparisonsData(state.workersData);
    },
    removeWorker: (state, action) => {
      state.comparisons.filter((item) => item.name !== action.payload);
      compareWorkHours(state);
    },
    sortWorkers: (state) => {
      state.sort((prev, current) =>  current.score - prev.score);
    }
  }
});


export const {addWorker, removeWorker, sortWorkers} = itemSlice.actions;
export default itemSlice.reducer;